import Path from 'path';
import { Sequelize, STRING, NUMBER, DATE, NOW, INTEGER } from 'sequelize';
import { PGUSER, PGPASSWORD, PGDATABASE, PGHOST, PGPORT } from '../Config/config';

// const sequelize = new Sequelize('','','', {
//     dialect: 'sqlite',
//     storage: Path.join('tmp', 'openMusic.sqlite')
// })

const sequelize = new Sequelize(`postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`);

const Music = sequelize.define('music', {
    id: {
        type: STRING,
        primaryKey: true
    },
    title: STRING,
    year: INTEGER,
    performer: STRING,
    genre: STRING,
    duration: INTEGER,
    insertedAt: {
        field: 'createdAt',
        type: DATE,
        defaultValue: NOW
    },
    updatedAt: DATE
})

Music.sync();

export default Music;