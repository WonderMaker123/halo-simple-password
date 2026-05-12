package run.halo.simplepassword;

import org.springframework.stereotype.Component;
import run.halo.app.plugin.BasePlugin;
import run.halo.app.plugin.PluginContext;

@Component
public class SimplePasswordPlugin extends BasePlugin {
    public SimplePasswordPlugin(PluginContext pluginContext) {
        super(pluginContext);
    }

    @Override
    public void onStartup() {
        getLogger().info("Simple Password Plugin started!");
    }
}
