# 1. ดึง Node.js Image
FROM node:20-alpine

# 2. กำหนด Working Directory ใน Container
WORKDIR /usr/src/app

# 3. คัดลอกไฟล์ package.json เพื่อติดตั้ง dependencies
COPY package*.json ./

# 4. ติดตั้ง packages ทั้งหมด
RUN npm install

# 5. คัดลอกไฟล์โค้ดทั้งหมดเข้ามาใน Container
COPY . .

# 6. บิลด์โค้ด TypeScript เป็น JavaScript
RUN npm run build

# 7. เปิด Port 3000
EXPOSE 3000

# 8. สั่งให้รันแอป NestJS
CMD ["npm", "run", "start:prod"]