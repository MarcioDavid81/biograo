interface ContactMessage {
    name: string
    email: string
    subject: string
    message: string
  }
  
  // Função para enviar mensagem de contato
  export async function sendContactMessage(data: ContactMessage): Promise<void> {
   
    await new Promise(resolve => setTimeout(resolve, 1000))
  
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
  
      if (!response.ok) {
        throw new Error('Falha ao enviar mensagem')
      }
  
      return
    } catch (error) {
      console.error('Erro ao enviar mensagem de contato:', error)
      throw new Error('Não foi possível enviar sua mensagem. Por favor, tente novamente mais tarde.')
    }
  }