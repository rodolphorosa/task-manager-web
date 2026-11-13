import { Activity } from "@/types/activity";
import TaskActivity from "./task-activity";

export default function Checklist() {
    const checklistItems: Activity[] = [
        { id: "1", title: "Definir os requisitos do projeto", isDone: true },
        { id: "2", title: "Criar a estrutura inicial do projeto", isDone: true },
        { id: "3", title: "Configurar o banco de dados", isDone: true },
        { id: "4", title: "Implementar a autenticação", isDone: false },
        { id: "5", title: "Criar os endpoints da API", isDone: false },
        { id: "6", title: "Desenvolver a interface do usuário", isDone: false },
        { id: "7", title: "Implementar a validação dos formulários", isDone: false },
        { id: "8", title: "Escrever testes automatizados", isDone: false },
        { id: "9", title: "Revisar a documentação", isDone: false },
    ];

    return (
        <div className="flex flex-col gap-1">
            {checklistItems.map((item) => (<TaskActivity activity={item} />))}
        </div>
    )
}