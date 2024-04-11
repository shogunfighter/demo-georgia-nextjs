"use server";

import prisma from "@/util/prisma";

import { TBatches, TMachineNumbers } from "@/types";
import { generateSerialNumber } from "@/util";

type TBatchesData = { data: TBatches };
type TMachineNumbersData = { data: TMachineNumbers };

type TErrorDataCreateBatches = { error: string; }

export async function createBatches(formData: FormData) {
    try {
        const batchesData = {
            data: {
                model: String(formData.get("model")),
                date: new Date(String(formData.get("date"))),
                licenseLevel: Number(formData.get("licenseLevel")),
                quantity: Number(formData.get("quantity")),
                comment: String(formData.get("comment"))
            }
        }

        const newBatches = await prisma.batches.create<TBatchesData>(batchesData);
        if (newBatches?.quantity > 0) {
            for (let i = 0; i < newBatches.quantity; i++) {
                let retry = 0, machineNumbersDataEntry;
                do {
                    const machineNumbersData: TMachineNumbersData = {
                        data: { serial_number: generateSerialNumber(Number(process.env.SERIAL_NUMBER_SUFFIX_LENGTH)) }
                    }

                    // need more test for this :)
                    // try {
                        machineNumbersDataEntry = await prisma.machine_numbers.create<TMachineNumbersData>(machineNumbersData);
                    // } catch (error2: any) {
                    //     return <TErrorDataCreateBatches>{ error: "Serial number generation error" };
                    // }

                    retry++;
                } while (!machineNumbersDataEntry && retry < 5)

                if (retry >= 5) {
                    return <TErrorDataCreateBatches>{ error: "Serial number generation retry error" };
                }
            }
        }
    } catch (error1: any) {
        return <TErrorDataCreateBatches>{ error: "Creating batches error" };
    }
}
export async function readBatches() {}
export async function updateBatches() {}
export async function deleteBatches() {}

export async function createMachineNumbers() {}
export async function readMachineNumbers() {}
export async function updateMachineNumbers() {}
export async function deleteMachineNumbers() {}