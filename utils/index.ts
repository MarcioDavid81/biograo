export const priceFormat = (price: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)

export const dateFormat = (date: string) => new Date(date).toLocaleDateString('pt-BR')

export const phoneFormat = (phone: string): string => {
    // Remove todos os caracteres não numéricos
    const cleaned = phone.replace(/\D/g, '');
    
    // Verifica se tem o tamanho mínimo para formatação (10 ou 11 dígitos)
    if (cleaned.length === 10) {
      return cleaned.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } 
    if (cleaned.length === 11) {
      return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    
    // Retorna o original se não for um número brasileiro válido
    return phone;
  };