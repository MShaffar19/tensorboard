/* Copyright 2019 The TensorFlow Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
==============================================================================*/
var tb_plugin;
(function (tb_plugin) {
    var lib;
    (function (lib) {
        var DO_NOT_USE_INTERNAL;
        (function (DO_NOT_USE_INTERNAL) {
            /**
             * This code is part of a public bundle provided to plugin authors,
             * and runs within an IFrame to setup communication with TensorBoard's frame.
             */
            if (!window.parent) {
                throw Error('The library must run within a TensorBoard iframe-based plugin.');
            }
            const channel = new MessageChannel();
            const ipc = new DO_NOT_USE_INTERNAL.IPC(channel.port1);
            channel.port1.start();
            const VERSION = 'experimental';
            window.parent.postMessage(`${VERSION}.bootstrap`, '*', [channel.port2]);
            // Only export for testability.
            DO_NOT_USE_INTERNAL._guestIPC = ipc;
            /**
             * Sends a message to the parent frame.
             * @return Promise that resolves with a payload from parent in response to this message.
             *
             * @example
             * const someList = await sendMessage('v1.some.type.parent.understands');
             * // do fun things with someList.
             */
            DO_NOT_USE_INTERNAL.sendMessage = DO_NOT_USE_INTERNAL._guestIPC.sendMessage.bind(DO_NOT_USE_INTERNAL._guestIPC);
            /**
             * Subscribes a callback to a message with particular type.
             */
            DO_NOT_USE_INTERNAL.listen = DO_NOT_USE_INTERNAL._guestIPC.listen.bind(DO_NOT_USE_INTERNAL._guestIPC);
            /**
             * Unsubscribes a callback to a message.
             */
            DO_NOT_USE_INTERNAL.unlisten = DO_NOT_USE_INTERNAL._guestIPC.unlisten.bind(DO_NOT_USE_INTERNAL._guestIPC);
        })(DO_NOT_USE_INTERNAL = lib.DO_NOT_USE_INTERNAL || (lib.DO_NOT_USE_INTERNAL = {}));
    })(lib = tb_plugin.lib || (tb_plugin.lib = {}));
})(tb_plugin || (tb_plugin = {})); // namespace tb_plugin.lib.DO_NOT_USE_INTERNAL
