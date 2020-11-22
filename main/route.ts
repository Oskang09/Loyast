import { ipcMain, IpcMainEvent } from 'electron';
import MemberAPI from './api/member';

type IpcApi = (event: IpcMainEvent, args: object) => void;

const apis: IpcApi[] = [
    ...MemberAPI
];

apis.forEach((api) => ipcMain.on(api.name, (e, a) => api(e, a[0])));