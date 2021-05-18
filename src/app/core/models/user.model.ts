import { GenderType } from '../types/gender.type';

export class UserModel {
    firstName!: string;
    lastName!: string;
    height!: number;
    gender!: GenderType;
    device!: string;
    onboardingCheck!: boolean;
    updateSize!: boolean;
}