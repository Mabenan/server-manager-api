
export namespace Schema {
    export class FieldDef {
        name?: string = "";
        type?: string = "";
        target?: string = "";
        defaultValue?: any;
    }
    export async function initObject<T extends Parse.Object = any>(fields: FieldDef[], testType: new () => T, clp: Parse.Schema.CLP = null) {
        var testInstance = new testType();
        var schemaExist = true;
        var schema: any = new Parse.Schema(testInstance.className);
        var schema2: any = { fields: {} };
        await schema.get().then((val: any) => schema2 = val).catch(() => schemaExist = false);
        fields.forEach(element => {
            switch (element.type) {
                case "Relation":
                    schema2.fields.hasOwnProperty(element.name) ? null : schema.addRelation(element.name, element.target);
                    break;
                case "Pointer":
                    schema2.fields.hasOwnProperty(element.name) ? null : schema.addPointer(element.name, element.target);
                    break;
                default:
                    schema2.fields.hasOwnProperty(element.name) ? null : schema["add" + element.type](element.name, { defaultValue: element.defaultValue });
                    break;
            }
        });
        if (clp != null) {
            schema.setCLP(clp);
        }
        schemaExist ? await schema.update() : await schema.save();
    }
}