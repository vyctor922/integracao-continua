import { Convenio } from "./convenio";
import { Paciente } from "./paciente";
import { Profissional } from "./profissional";

export interface Atendimento {
    id: number;
    data: string;
    hora: string;
    status: string;
    profissional: Profissional;
    convenio: Convenio | null;
    paciente: Paciente;
}
