import { MemberRepository } from "../models/index";
import { IpcMainEvent } from "electron";

function getMember(event: IpcMainEvent, args: object) {
    MemberRepository.findAll().then(console.log);
}

export default [
    getMember,
];