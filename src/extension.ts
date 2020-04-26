import * as vscode from 'vscode';
import { codes } from './codes';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "status" is now active!');

	let insertCode = (value: string | undefined) => {
		let editor = vscode.window.activeTextEditor;

		if (!editor) {
			vscode.window.showErrorMessage("Can't insert text because no document is open.");
			return;
		}

		if (!value) {
			return;
		}

		let selection = editor.selection;

		editor.edit((editBuilder) => {
			editBuilder.insert(selection.start, value);
		});
	};

	let statusDisposable = vscode.commands.registerCommand('status.insertStatus', () => {
		vscode.window
			.showQuickPick(
				codes.map(
					(code) => {
						return code.title;
					},
					{ placeHolder: 'Select a Response Catergory' }
				)
			)
			.then((res) => {
				let selection = codes.filter((code) => code.title === res)[0];

				vscode.window
					.showQuickPick(selection.codes, { placeHolder: 'Select a Response Code' })
					.then((statusCode) => {
						let codeSelection = statusCode?.split(' ')[0];
						insertCode(codeSelection);
					});
			});
	});

	context.subscriptions.push(statusDisposable);
}

export function deactivate() {}
