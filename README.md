# Cyber Tasks - To-Do List Moderna

![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)
![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

Aplicativo de lista de tarefas moderno com dark mode, integração com API e persistência de dados, desenvolvido com React Native e Expo.

![Screenshot da Aplicação](screenshot.png) <!-- Adicione uma screenshot real depois -->

## ✨ Funcionalidades

- ✅ Adicionar novas tarefas
- ✔️ Marcar/desmarcar tarefas como concluídas
- 🗑️ Excluir tarefas
- 🌙 Dark mode moderno (tema cyberpunk)
- 📱 Offline-first com AsyncStorage
- 🌐 Integração com API pública (JSONPlaceholder)
- 🔄 Sincronização automática
- 📲 Compatível com iOS, Android e Web

## 🚀 Como Executar

### Pré-requisitos

- Node.js (v18+)
- npm (v9+)
- Expo CLI (`npm install -g expo-cli`)

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/todo-list.git
cd todo-list

    Instale as dependências:

bash
Copy

npm install

    Inicie o servidor de desenvolvimento:

bash
Copy

npx expo start

📱 No Celular

    Instale o app Expo Go (Android / iOS)

    Escaneie o QR code exibido no terminal

💻 No Computador

Para web:
bash
Copy

npx expo start --web

Para emulador:
bash
Copy

# Android
npx expo run:android

# iOS (requer Xcode)
npx expo run:ios

🛠 Tecnologias

    React Native

    Expo

    TypeScript

    AsyncStorage

    Axios

    React Navigation

    JSONPlaceholder API

🌐 Deployment
Opção 1: Expo Hosting (Recomendado)
bash
Copy

expo publish

Acesse via: https://expo.dev/@seu-usuario/todo-list
Opção 2: Web Estático (Vercel/Netlify)
bash
Copy

npx expo export:web

Deploy da pasta web-build
Opção 3: App Stores (EAS Build)
bash
Copy

npm install -g eas-cli
eas build:configure
eas build --platform all

📄 Licença

MIT License - veja o arquivo LICENSE para detalhes

Desenvolvido por [Seu Nome] - Portfólio | LinkedIn
Copy


## Sugestões de Deploy:

1. **Expo Hosting (Mais simples)**
   - Execute `expo publish`
   - Disponível em: `https://expo.dev/@your-username/your-app`
   - Compartilhe o link diretamente

2. **Android Play Store / Apple App Store**
   - Use EAS Build: `eas build --platform android|ios`
   - Siga o guia oficial: [Expo Deployment Docs](https://docs.expo.dev/distribution/app-stores/)

3. **Web Estático**
   - Gere build web: `npx expo export:web`
   - Deploy na Vercel/Netlify:
     ```bash
     npm install -g vercel
     vercel deploy --prod web-build
     ```

4. **APK Android Autônomo**
   ```bash
   npx expo run:android

O APK será gerado em android/app/build/outputs/apk/debug
