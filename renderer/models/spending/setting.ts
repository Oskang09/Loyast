import { Model, Table, Column, DataType, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table({
    modelName: 'spending-setting',
    tableName: 'spending-settings',
    timestamps: true,
    freezeTableName: true,
})
class SpendingSetting extends Model {

    @Column({
        type: DataType.INTEGER,
        primaryKey: true
    })
    id: string

    @Column({ type: DataType.STRING })
    currency: string

    @Column({ type: DataType.STRING })
    amountPerPoint: string

    @Column({ type: DataType.JSONB })
    rewards: [{ points: string, rewardId: string }]

    @CreatedAt
    createdAt: Date

    @UpdatedAt
    updatedAt: Date
}

export default SpendingSetting;