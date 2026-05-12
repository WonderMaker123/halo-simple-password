# Halo 简单密码插件

给文章添加简单的密码访问保护。

## 安装

1. 构建项目: `./gradlew build`
2. 在 Halo 后台 -> 插件管理 -> 上传插件
3. 找到 `build/libs/halo-simple-password-1.0.0.jar`

## 使用方法

### 1. 在文章中设置密码

在文章编辑页面的"元数据"或"高级设置"中添加:

```json
{
  "simple-password": "你的密码"
}
```

### 2. 修改主题模板

找到你的主题中显示文章内容的模板文件（如 `post.html` 或 `article.html`），修改为:

```html
<div th:replace="plugin:halo-simple-password:fragments/protection :: protection(post=${post}, content=~{::article})">
  <article th:fragment="article">
    <!-- 你的文章内容 -->
  </article>
</div>
```

### 3. 完成！

现在访问受保护的文章时，会显示密码输入框。访客输入正确密码后即可查看内容。

## 工作原理

- 密码存储在文章的 metadata 元数据中
- 前端使用 localStorage 记录已验证的密码
- 验证通过后，内容对当前浏览器会话可见

## 注意事项

- 这是"门槛"式保护，技术用户查看源码仍能看到内容
- 如需真正加密内容，请使用其他加密插件
- 密码验证在前端完成，安全性较低，仅适用于一般隐私保护
