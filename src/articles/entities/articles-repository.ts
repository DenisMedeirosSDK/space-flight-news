import { Articles } from './Articles';
export type Pagination = {
  page: number;
  limit: number;
};
export interface ArticlesRepository {
  create(data: unknown): Promise<Articles>;
  findAll(pagination?: Pagination): Promise<Articles[]>;
  findById(_id: string): Promise<Articles>;
  delete(_id: string): Promise<void>;
  update(_id: string, data: unknown): Promise<void>;
}
