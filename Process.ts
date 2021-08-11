import { Schema } from "./schema";

    export class Process extends Parse.Object {

        public get Name(): string {
            return this.get<string>("Name");
        }

        public set Name(value: string) {
            this.set("Name", value);
        }

        public set CurrentStep(value: number) {
            this.set("CurrentStep", value);
        }

        public set Progress(value: number) {
            this.set("Progress", value);
        }

        public get Running(): boolean {
            return this.get("Running");
        }


        public set Running(value: boolean) {
            this.set("Running", value);
        }

        makeProgress(value: number) {
            this.increment("Progress", value);
            this.save(null, { useMasterKey: true });
        }

        newStep() {
            this.increment("CurrentStep", 1);
            this.Progress = 0;
            this.save(null, { useMasterKey: true });
        }

        init() {
            this.CurrentStep = 0;
            this.Progress = 0;
        }

        constructor() {
            super("Process");
        }

    }

    export async function ProcessInit() {
        Parse.Object.registerSubclass("Process", Process);
        await Schema.initObject<Process>([
            { name: "Name", type: "String" },
            { name: "CurrentStep", type: "Number" },
            { name: "Running", type: "Boolean" },
            { name: "Progress", type: "Number" }
        ], Process, {
            find: { requiresAuthentication: undefined, 'role:Admin': true },
            get: {  requiresAuthentication: undefined, 'role:Admin': true },
            count: {  requiresAuthentication: undefined, 'role:Admin': true },
            create: {  requiresAuthentication: undefined, 'role:Admin': true },
            update: {  requiresAuthentication: undefined, 'role:Admin': true },
            delete: {  requiresAuthentication: undefined, 'role:Admin': true },
            addField: {  requiresAuthentication: undefined, 'role:Admin': true }
        });
    }