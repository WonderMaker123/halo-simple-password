package run.halo.simplepassword;

import run.halo.app.plugin.BasePlugin;
import run.halo.app.plugin.PluginContext;

public class SimplePasswordPlugin extends BasePlugin {
    public SimplePasswordPlugin(PluginContext pluginContext) {
        super(pluginContext);
    }

    @Override
    public void onCreate(PluginContext context) {
        getLogger().info("Simple Password Plugin created!");
    }
}
