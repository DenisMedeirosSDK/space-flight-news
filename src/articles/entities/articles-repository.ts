import { Articles } from './Articles';

export interface ArticlesRepository {
  create(data: unknown): Promise<Articles>;
  findAll(): Promise<Articles[]>;
  findById(_id: string): Promise<Articles>;
  delete(_id: string): Promise<void>;
  update(_id: string, data: unknown): Promise<void>;
}
