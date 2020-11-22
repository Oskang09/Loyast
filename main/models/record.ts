import { Model, Table, Column, DataType, CreatedAt } from 'sequelize-typescript';

@Table({
    modelName: 'record',
    tableName: 'records',
    timestamps: true,
    freezeTableName: true,
})
class Record extends Model {

    @Column({
        type: DataType.STRING(20),
        primaryKey: true,
    })
    id: string

    @Column({ type: DataType.STRING(20) })
    memberId: string

    @Column({ type: DataType.INTEGER })
    sequence: number

    @Column({ type: DataType.INTEGER })
    loyaltyId: number

    @Column({ type: DataType.JSONB })
    payload: RecordPayload

    @CreatedAt
    createdAt: Date
}

type RecordPayload = string;

export default Record;