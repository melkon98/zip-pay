import { MigrationInterface, QueryRunner } from "typeorm";

export class addedUserEntity1671027705409 implements MigrationInterface {
    name = 'addedUserEntity1671027705409'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "accounts" DROP COLUMN "content"`);
        await queryRunner.query(`ALTER TABLE "accounts" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "accounts" ADD "balance" double precision NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "accounts" DROP COLUMN "balance"`);
        await queryRunner.query(`ALTER TABLE "accounts" ADD "image" character varying NOT NULL DEFAULT 'default-account.png'`);
        await queryRunner.query(`ALTER TABLE "accounts" ADD "content" character varying NOT NULL`);
    }

}
