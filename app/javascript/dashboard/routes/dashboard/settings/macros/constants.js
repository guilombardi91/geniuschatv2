export const MACRO_ACTION_TYPES = [
  {
    key: 'assign_team',
    label: 'Atribuir a um time',
    inputType: 'search_select',
  },
  {
    key: 'assign_agent',
    label: 'Atribuir a um agente',
    inputType: 'search_select',
  },
  {
    key: 'add_label',
    label: 'Adicionar etiqueta',
    inputType: 'multi_select',
  },
  {
    key: 'remove_label',
    label: 'Remover  etiqueta',
    inputType: 'multi_select',
  },
  {
    key: 'remove_assigned_team',
    label: 'Remover time atribuído',
    inputType: null,
  },
  {
    key: 'send_email_transcript',
    label: 'Enviar um email com a transcrição',
    inputType: 'email',
  },
  {
    key: 'mute_conversation',
    label: 'Mutar conversa',
    inputType: null,
  },
  {
    key: 'snooze_conversation',
    label: 'Snooze conversation',
    inputType: null,
  },
  {
    key: 'resolve_conversation',
    label: 'Resolver conversa',
    inputType: null,
  },
  {
    key: 'send_attachment',
    label: 'Enviar anexo',
    inputType: 'attachment',
  },
  {
    key: 'send_message',
    label: 'Enviar mensagem',
    inputType: 'textarea',
  },
  {
    key: 'add_private_note',
    label: 'Adicionar nota privada',
    inputType: 'textarea',
  },
  {
    key: 'change_priority',
    label: 'Mudar prioridade',
    inputType: 'search_select',
  },
];
