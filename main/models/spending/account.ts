import { Model, Table, Column, DataType, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table({
    modelName: 'spending-account',
    tableName: 'spending-accounts',
    timestamps: true,
    freezeTableName: true,
})
class SpendingAccount extends Model {

    @Column({
        type: DataType.STRING(4),
        primaryKey: true,
    })
    id: string

    @Column({ type: DataType.INTEGER })
    loyaltyId: number

    @Column({ type: DataType.STRING })
    points: string

    @CreatedAt
    createdAt: Date

    @UpdatedAt
    updatedAt: Date
}

export default SpendingAccount;