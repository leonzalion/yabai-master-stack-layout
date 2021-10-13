import { createInitializedWindowsManager } from '../utils';
import { main } from '../utils/main';

main(async () => {
	const { wm, display, state } = await createInitializedWindowsManager();
	console.info('Starting to handle window_moved.');
	await wm.updateWindows({
		targetNumMasterWindows: state[display.id].numMasterWindows,
	});
	console.info('Finished handling window_moved.');
});
