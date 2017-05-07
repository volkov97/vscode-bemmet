'use strict';
import * as vscode from 'vscode';
import * as lib from './lib';

export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('extension.convert', () => {
        try {
            const editor = lib.getActiveEditor();
            const text = lib.getSelectionText(editor);

            const bemjson = require('bemmet').stringify(text) || '';

            lib.replaceSelectionBy(editor, bemjson);
        } catch(err) {
            console.error(err);
        }
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}