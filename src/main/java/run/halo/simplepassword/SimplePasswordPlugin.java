package run.halo.simplepassword;

import lombok.extern.slf4j.Slf4j;
import run.halo.app.plugin.BasePlugin;
import run.halo.app.plugin.PluginContext;

@Slf4j
public class SimplePasswordPlugin extends BasePlugin {
    public SimplePasswordPlugin(PluginContext pluginContext) {
        super(pluginContext);
    }

    @Override
    public void onStartup() {
        log.info("Simple Password Plugin started!");
    }
}
