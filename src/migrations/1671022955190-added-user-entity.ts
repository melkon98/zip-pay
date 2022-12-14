import { MigrationInterface, QueryRunner } from "typeorm";

export class addedUserEntity1671022955190 implements MigrationInterface {
    name = 'addedUserEntity1671022955190'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."verificationCode_index"`);
        await queryRunner.query(`CREATE TABLE "accounts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying NOT NULL, "content" character varying NOT NULL, "image" character varying NOT NULL DEFAULT 'default-account.png', "userId" uuid, CONSTRAINT "UQ_c54217a67ca2db95efff4740c9e" UNIQUE ("title"), CONSTRAINT "PK_5a7a02c20412299d198e097a8fe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "photo"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "verified"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "verificationCode"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "monthly_salary" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "monthly_expenses" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "accounts" ADD CONSTRAINT "FK_3aa23c0a6d107393e8b40e3e2a6" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "accounts" DROP CONSTRAINT "FK_3aa23c0a6d107393e8b40e3e2a6"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "monthly_expenses"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "monthly_salary"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "verificationCode" text`);
        await queryRunner.query(`ALTER TABLE "users" ADD "verified" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "users" ADD "photo" character varying NOT NULL DEFAULT 'default.png'`);
        await queryRunner.query(`DROP TABLE "accounts"`);
        await queryRunner.query(`CREATE INDEX "verificationCode_index" ON "users" ("verificationCode") `);
    }

}
