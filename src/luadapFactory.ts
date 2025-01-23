import { DebugAdapterDescriptorFactory, DebugAdapterServer, DebugSession } from 'vscode';

export class LuaDebugAdapterDescriptorFactory implements DebugAdapterDescriptorFactory {
    createDebugAdapterDescriptor(session: DebugSession): DebugAdapterServer | undefined {
        const config = session.configuration;
        return new DebugAdapterServer(config.port, config.host);
    }
}