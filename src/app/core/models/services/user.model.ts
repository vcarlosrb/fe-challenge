export class UserPostRequest {
    height!: number;
    gender!: string;
    imageFront!: string;
    imageSide!: string;
};

export class UpdateUserRequest {
    realTopSize!: string;
    realBottomSize!: number;
    realChest!: number;
    realWaist!: number;
    realHip!: number;
    realThigh!: number;
}