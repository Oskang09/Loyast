import { Sequelize, DataType, ModelCtor } from 'sequelize-typescript';

import Member from './member';
import Record from './record';
import Reward from './reward';
import SpendingSetting from './spending/setting';
import SpendingAccount from './spending/account';

const models: ModelCtor[] = [];
models.push(Member);
models.push(Record);
models.push(Reward);
models.push(SpendingSetting);
models.push(SpendingAccount);

// @ts-ignore
const sequelize: Sequelize = new Sequelize({
    models,
    logging: false,
    dialect: 'sqlite',
    repositoryMode: true
});
sequelize.sync();

export const MemberRepository = sequelize.getRepository(Member);
export const RecordRepository = sequelize.getRepository(Record);
export const RewardRepository = sequelize.getRepository(Reward);
export const SpendingSettingRepository = sequelize.getRepository(SpendingSetting);
export const SpendingAccountRepository = sequelize.getRepository(SpendingAccount);

export default sequelize;