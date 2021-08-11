import { Process } from "./Process";

export namespace Cloud{
    export async function runProcess<T>(name: string, cb: (process: Process, request: Parse.Cloud.JobRequest<T>) => Promise<void>, request: Parse.Cloud.JobRequest<T>): Promise<void> {
        const processQuery = new Parse.Query<Process>("Process");
        processQuery.equalTo("Name", name);
        const results = await processQuery.find({ useMasterKey: true });
        var currentProc: Process;
        if (results.length <= 0) {
            currentProc = new Process();
            currentProc.Name = name;
        } else {
            currentProc = results[0];
        }

        if (!currentProc.Running) {
            currentProc.Running = true;
            currentProc.init();
            currentProc.save(null, { useMasterKey: true }).catch((err) => console.log(err));
            cb(currentProc, request).then(() => {
                currentProc.Running = false;
                currentProc.save(null, { useMasterKey: true }).catch((err) => console.log(err));
            }).catch((err) => {
                console.log(err);
                currentProc.Running = false;
                currentProc.save(null, { useMasterKey: true }).catch((err) => console.log(err));
            });
        }
    }
}