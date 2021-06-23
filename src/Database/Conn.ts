import Path from 'path';
import { Sequelize, STRING, NUMBER, DATE, NOW } from 'sequelize';
const sequelize = new Sequelize('','','', {
    dialect: 'sqlite',
    storage: Path.join('tmp', 'openMusic.sqlite')
})

const Music = sequelize.define('music', {
    id: {
        type: STRING,
        primaryKey: true
    },
    title: STRING,
    year: NUMBER,
    performer: STRING,
    genre: STRING,
    duration: NUMBER,
    insertedAt: {
        field: 'createdAt',
        type: DATE,
        defaultValue: NOW
    },
    updatedAt: DATE
})

Music.sync();

export default Music;