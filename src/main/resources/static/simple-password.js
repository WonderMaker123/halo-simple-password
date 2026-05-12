/**
 * Halo Simple Password Protection
 * 简单密码保护 - 前端脚本
 */
(function() {
  'use strict';

  var STORAGE_PREFIX = 'spp_verified_';

  function initProtection() {
    document.querySelectorAll('.spp-wrapper[data-spp-password]').forEach(function(wrapper) {
      var postId = wrapper.dataset.sppPostId || 'default';
      var password = wrapper.dataset.sppPassword;
      var storageKey = STORAGE_PREFIX + postId;
      var overlay = wrapper.querySelector('.spp-overlay');
      var content = wrapper.querySelector('.spp-content');

      if (!password) {
        showContent(overlay, content);
        return;
      }

      if (localStorage.getItem(storageKey) === password) {
        showContent(overlay, content);
        return;
      }

      showPasswordForm(wrapper, overlay, content, password, storageKey);
    });
  }

  function showContent(overlay, content) {
    if (overlay) overlay.style.display = 'none';
    if (content) content.style.display = 'block';
  }

  function showPasswordForm(wrapper, overlay, content, password, storageKey) {
    if (overlay) overlay.style.display = 'flex';
    if (content) content.style.display = 'none';

    var form = wrapper.querySelector('.spp-form');
    var input = wrapper.querySelector('.spp-input');
    var errorMsg = wrapper.querySelector('.spp-error');

    if (form && input) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();

        if (input.value === password) {
          localStorage.setItem(storageKey, password);
          if (overlay) overlay.style.display = 'none';
          if (content) content.style.display = 'block';
        } else {
          if (errorMsg) errorMsg.style.display = 'block';
          input.value = '';
          input.focus();
        }
      });
    }

    if (input) input.focus();
  }

  // Init on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProtection);
  } else {
    initProtection();
  }

  // Watch for dynamically added content
  if (typeof MutationObserver !== 'undefined') {
    new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        mutation.addedNodes.forEach(function(node) {
          if (node.nodeType === 1 && node.classList && node.classList.contains('spp-wrapper')) {
            initProtection();
          }
        });
      });
    }).observe(document.body, { childList: true, subtree: true });
  }
})();
