import { Condition } from '../../domain/condition.entity';

export interface ConditionRepository {
  getMany(): Promise<Condition[]>;
}