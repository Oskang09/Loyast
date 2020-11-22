import { Model, Table, Column, DataType, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table({
    modelName: 'member',
    tableName: 'members',
    timestamps: true,
    freezeTableName: true,
})
class Member extends Model {

    @Column({
        type: DataType.STRING(20),
        primaryKey: true,
    })
    id: string

    @Column({
        type: DataType.STRING,
        validate: { max: 50 }
    })
    name: string

    @Column({ type: DataType.STRING })
    countryCode: string

    @Column({ type: DataType.STRING })
    phoneNumber: string

    @CreatedAt
    createdAt: Date

    @UpdatedAt
    updatedAt: Date
}

export default Member;