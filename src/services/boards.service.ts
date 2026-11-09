import { ApiClient } from "./api";
import Board, {CreateBoardRequest} from "../types/board";

const api = new ApiClient();

export const boardsService = {
    create(request: CreateBoardRequest): Promise<Board> {
        return api.post<Board>('/boards', request)
    },

    findAll(): Promise<Board[]> {
        return api.get<Board[]>('/boards')
    },

    findById(id: string): Promise<Board> {
        return api.get<Board>(`/boards/${id}`)
    },
}
