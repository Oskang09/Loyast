import { Model, Table, Column, DataType, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table({
    modelName: 'record',
    tableName: 'records',
    timestamps: true,
    freezeTableName: true,
})
class Reward extends Model {

    @Column({
        type: DataType.STRING(20),
        primaryKey: true,
    })
    id: string

    @Column({ type: DataType.STRING })
    display: string

    @Column({ type: DataType.STRING })
    title: string

    @Column({ type: DataType.STRING })
    description: string

    @CreatedAt
    createdAt: Date

    @UpdatedAt
    updatedAt: Date
}

export default Reward;