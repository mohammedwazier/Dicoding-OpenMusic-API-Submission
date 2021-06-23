import Joi from 'joi';
import { Request, ResponseToolkit, ResponseEventHandler } from "@hapi/hapi"
import Songs from '../Database/Conn';
import { nanoid } from 'nanoid';

const MusicSample: object = {
    "id": "song-Qbax5Oy7L8WKf74l",
    "title": "Kenangan Mantan",
    "year": 2021,
    "performer": "Dicoding",
    "genre": "Indie",
    "duration": 120,
    "insertedAt": "2021-03-04T09:11:44.598Z",
    "updatedAt": "2021-03-04T09:11:44.598Z"
}

export default {
    CreateSongs: async (req: Request, h: ResponseToolkit) => {
        let checkRequest = Joi.object({
            title: Joi.string().required(),
            year: Joi.number().required(),
            performer: Joi.string().required(),
            genre: Joi.string().required(),
            duration: Joi.number().required()
        })
        const { payload }: any = req;
        const {value: data, error} = await checkRequest.validate(payload)
        if(error){
            return h.response({
                status: 'fail',
                message: 'data tidak sesuai, silahkan cek parameter kembali'
            }).code(400)
        }

        try {
            payload.id = `songs-${nanoid()}`;
            payload.insertedAt = new Date();
            await Songs.create(payload);
            return h.response({
                status: 'success',
                message: 'Lagu berhasil ditambahkan',
                data: {
                    songId: payload.id
                }
            }).code(201)
        } catch (error) {
            return h.response({
                status: 'fail',
                message: 'Gagal input data',
                err: error
            }).code(500)
        }
    },
    GetSongs: async (req: Request, h: ResponseToolkit) => {
        try {
            let data = await Songs.findAll({
                attributes: ['id', 'title', 'performer']
            });
            return h.response({
                status: 'success',
                data: {
                    songs: data
                }
            }).code(200)
        } catch (error) {
            return h.response({
                status: 'fail',
                message: 'Gagal mengambil data',
                err: error
            }).code(500)
        }
    },
    GetSongById: async (req: Request, h: ResponseToolkit) => {
        try {
            let { id } = req.params
            let data = await Songs.findOne({
                where: {
                    id
                }
            })
            if(!data){
                return h.response({
                    status: 'fail',
                    message: 'Data tidak ditemukan'
                }).code(404)
            }
            return h.response({
                status: 'success',
                data: {
                    song: data
                }
            }).code(200)
        } catch (error) {
            return h.response({
                status: 'fail',
                message: 'Gagal mengambil data',
                err: error
            }).code(500)
        }
    },
    UpdateSong: async (req: Request, h: ResponseToolkit) => {
        let checkRequest = Joi.object({
            title: Joi.string().required(),
            year: Joi.number().required(),
            performer: Joi.string().required(),
            genre: Joi.string().required(),
            duration: Joi.number().required()
        })
        const { payload, params: { id } }: any = req;
        const {value: data, error} = await checkRequest.validate(payload)
        if(error){
            return h.response({
                status: 'fail',
                message: 'data tidak sesuai, silahkan cek parameter kembali'
            }).code(400)
        }
        try {
            let update: any = await Songs.findOne({
                where: {
                    id
                }
            })
            if(!update){
                return h.response({
                    status: 'fail',
                    message: 'Data tidak ditemukan'
                }).code(404)
            }
            Object.keys(payload).map(d => {
                update[d] = payload[d]
            })
            await update.save();

            return h.response({
                status: 'success',
                message: 'lagu berhasil diperbarui'
            }).code(200);

        } catch (error) {
            return h.response({
                status: 'fail',
                message: 'Gagal mengambil data',
                err: error
            }).code(500)
        }
    },
    DeleteSong: async (req: Request, h: ResponseToolkit) => {
        const { params: { id } }: any = req;
        try {
            let deleteData: any = await Songs.findOne({
                where: {
                    id
                }
            })
            if(!deleteData){
                return h.response({
                    status: 'fail',
                    message: 'Data tidak ditemukan'
                }).code(404)
            }
            await deleteData.destroy();
            return h.response({
                status: 'success',
                message: 'lagu berhasil dihapus'
            }).code(200)
        } catch (error) {
            return h.response({
                status: 'fail',
                message: 'Gagal mengambil data',
                err: error
            }).code(500)
        }
    },
    DeleteAll: async (req: Request, h: ResponseToolkit) => {
        try {
            await Songs.destroy({
                where: {},
                truncate: true
            })
            return h.response({
                status: 'success',
                message: 'Berhasil menghapus semua Recod'
            })
        } catch (error) {
            return h.response({
                status: 'fail',
                message: 'Gagal mengambil data',
                err: error
            }).code(500)
        }
    }
}