import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiGithub, 
  FiLinkedin,
  FiCalendar,
  FiUser,
  FiCode,
  FiAward,
  FiBriefcase,
  FiGlobe,
  FiSend
} from 'react-icons/fi';
import { 
  SiReact, 
  SiNodedotjs, 
  SiPython, 
  SiPhp, 
  SiMysql,
  SiMongodb,
  SiTensorflow, 
  
} from 'react-icons/si';
import { FaPlane } from 'react-icons/fa';
import ParticleBackground from './components/ParticleBackground';
import TypeWriter from './components/TypeWriter';
import SkillBar from './components/SkillBar';
import ProjectCard from './components/ProjectCard';
import AirplaneSection from './components/AirplaneSection'
import { FaEthereum } from "react-icons/fa";
function App() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <ParticleBackground />
{/* Con trỏ chính */}
<motion.div
  className="fixed text-blue-400 z-50 pointer-events-none"
  style={{
    left: mousePosition.x,
    top: mousePosition.y,
    transform: "translate(-50%, -50%) rotate(45deg)",
    fontSize: "32px",
  }}
  animate={{
    scale: [1, 1.2, 1],
    opacity: [1, 0.7, 1],
  }}
  transition={{
    duration: 0.8,
    repeat: Infinity,
  }}
>
  <FiSend />
</motion.div>

{/* Trail sau đuôi */}
{[...Array(5)].map((_, i) => (
  <motion.div
    key={i}
    className="fixed text-blue-400 z-40 pointer-events-none"
    style={{
      left: mousePosition.x,
      top: mousePosition.y,
      transform: "translate(-50%, -50%) rotate(45deg)",
      fontSize: `${28 - i * 4}px`, // nhỏ dần
    }}
    animate={{
      x: [0, i * -6],   // lệch ngược hướng mũi (trái)
      y: [0, i * 6],    // lệch xuống dưới
      opacity: [0.5, 0],
    }}
    transition={{
      duration: 0.3 + i * 0.1,
      repeat: Infinity,
    }}
  >
    <FiSend />
  </motion.div>
))}



     {/* Header Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <motion.div
          className="text-center z-10"
          style={{ y }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4 
              bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 
              bg-clip-text text-transparent text-center break-words">
              <TypeWriter text="VAIN DANTHOR" delay={1000} speed={150} />
            </h1>

            <div className="text-xl md:text-2xl text-gray-300">
              <TypeWriter text="Fullstack Web Developer - Business Analyst | CRM" delay={3000} speed={100} />
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6 mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5, duration: 0.8 }}
          >
            {[
              { icon: FiGithub, url: "https://github.com/Dothuan6" },
              { icon: FiLinkedin, url: "https://linkedin.com" },
              { icon: FiMail, url: "mailto:thuann6222@gmail.com" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                className="p-4 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900 z-0" />
      </section>

    {/* Tech Stack Section */}
      <motion.section
        className="py-20 px-4 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Công Nghệ Sử Dụng
        </motion.h2>

        <motion.div 
          className="flex flex-wrap justify-center gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {[
            { icon: SiReact, color: "text-blue-400", label: "React.js" },
            { icon: SiNodedotjs, color: "text-green-400", label: "Node.js" },
            { icon: SiPython, color: "text-yellow-400", label: "Python" },
            { icon: SiPhp, color: "text-purple-400", label: "PHP" },
            { icon: SiMysql, color: "text-orange-400", label: "MySQL" },
            { icon: SiMongodb, color: "text-green-500", label: "MongoDB" },
            { icon: SiTensorflow, color: "text-orange-500", label: "TensorFlow" },
            { icon: FiCode, color: "text-pink-400", label: "Solidity" },
            { icon: FaEthereum, color: "text-pink-400", label: "Web 3" }
          ].map((tech, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center p-6 bg-gray-800 rounded-xl ${tech.color} cursor-pointer`}
              whileHover={{ scale: 1.2, rotate: 10, boxShadow: "0 0 20px rgba(59,130,246,0.8)" }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <tech.icon className="w-10 h-10 mb-3" />
              <span className="text-sm text-gray-300">{tech.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/*may bay*/}
      <AirplaneSection />
        
      
       {/* Contact Info Section */}
      <motion.section
        className="py-20 px-4 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          Thông Tin Liên Hệ
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { icon: FiCalendar, label: "Ngày sinh", value: "06/02/2002" },
            { icon: FiPhone, label: "Điện thoại", value: "+84 776 562 237" },
            { icon: FiMail, label: "Email", value: "thuann6222@gmail.com" },
            { icon: FiGithub, label: "GitHub", value: "github.com/Dothuan6" },
            { icon: FiMapPin, label: "Địa chỉ", value: "TP. Hồ Chí Minh, Việt Nam" },
            { icon: FiGlobe, label: "Website", value: "dovanthuan.dev" }
          ].map((contact, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-4 p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)" }}
            >
              <div className="p-3 bg-blue-600 rounded-lg group-hover:bg-purple-600 transition-colors duration-300">
                <contact.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">{contact.label}</p>
                <p className="text-white font-medium">{contact.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* About Me Section */}
      <motion.section
        className="py-20 px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Giới Thiệu
        </motion.h2>
        
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Tôi là một Freelancer Web Developer với niềm đam mê mãnh liệt về công nghệ và phát triển web. 
            Với kinh nghiệm trong việc xây dựng các ứng dụng web hiện đại và hệ thống AI/ML, 
            tôi luôn strive để tạo ra những sản phẩm chất lượng cao và user-friendly.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            Chuyên môn của tôi bao gồm phát triển full-stack với React.js, Node.js, Python, Solidity 
            và có kinh nghiệm làm việc với các dự án từ e-commerce đến hệ thống quản lý học tập phức tạp.
          </p>
        </motion.div>
      </motion.section>
{/* Education Section */}
<motion.section
  className="py-20 px-4 max-w-4xl mx-auto"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>
  <motion.h2 
    className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    Học Vấn
  </motion.h2>
  
  <motion.div
    className="bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    whileHover={{ scale: 1.02, y: -5 }}
  >
    <div className="flex items-center mb-6">
      <div className="p-4 bg-blue-600 rounded-xl mr-6">
        <FiAward className="w-8 h-8" />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-white">Đại Học Cần Thơ</h3>
        <p className="text-blue-400">Khoa Công Nghệ Thông Tin</p>
      </div>
    </div>
    <div className="border-l-4 border-blue-500 pl-6 space-y-3">
      <p className="text-xl font-semibold text-white">Kỹ Sư Công Nghệ Thông Tin</p>
      <p className="text-green-400 font-bold text-lg">Xếp loại: Giỏi</p>
      <p className="text-gray-400">2020 - 2025</p>
      <motion.p 
        className="text-purple-400 italic"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Hiện đang collab cùng <span className="font-bold text-pink-400">Mss. Thanh Thảo</span>, 
        với ước mơ <span className="text-yellow-400 font-bold">ETH đạt 10k</span> 🚀✨
      </motion.p>
    </div>
  </motion.div>
</motion.section>
      {/* Skills Section */}
      <motion.section 
        className="py-20 px-4 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Kỹ Năng
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <FiCode className="mr-3 text-blue-400" />
              Programming Languages
            </h3>
            <SkillBar skill="Python" percentage={95} delay={0} />
            <SkillBar skill="JavaScript/TypeScript" percentage={90} delay={0.1} />
            <SkillBar skill="PHP" percentage={85} delay={0.2} />
            <SkillBar skill="SQL" percentage={80} delay={0.3} />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <SiReact className="mr-3 text-blue-400" />
              Frameworks & Tools
            </h3>
            <SkillBar skill="React.js/Next.js" percentage={92} delay={0} />
            <SkillBar skill="Node.js" percentage={88} delay={0.1} />
            <SkillBar skill="Flask/Django" percentage={85} delay={0.2} />
            <SkillBar skill="AI/ML (TensorFlow)" percentage={82} delay={0.3} />
          </div>
        </div>

        <motion.div 
          className="flex justify-center mt-16 space-x-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {[
            { icon: SiReact, color: "text-blue-400" },
            { icon: SiNodedotjs, color: "text-green-400" },
            { icon: SiPython, color: "text-yellow-400" },
            { icon: SiPhp, color: "text-purple-400" },
            { icon: SiMysql, color: "text-orange-400" },
            { icon: SiMongodb, color: "text-green-500" },
            { icon: SiTensorflow, color: "text-orange-500" },
          { icon: FaEthereum, color: "text-pink-500" },
          ].map((tech, index) => (
            <motion.div
              key={index}
              className={`p-4 bg-gray-800 rounded-xl ${tech.color} hover:scale-110 transition-transform duration-300`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <tech.icon className="w-8 h-8" />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        className="py-20 px-4 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Kinh Nghiệm Làm Việc
        </motion.h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
          
          {[
            {
              company: "VNPT Vĩnh Long",
              position: "Web Developer",
              duration: "2023",
              description: "Phát triển và maintain các hệ thống web nội bộ, tối ưu hóa hiệu suất và user experience."
            },
            {
              company: "TuoiTreSoft",
              position: "Full-stack Developer | IT BA | Assitant | QA&QC",
              duration: "2023 - Hiện tại",
              description: "Xây dựng các ứng dụng web full-stack với React.js và Node.js, tham gia các dự án AI/ML. Đề xuất giải pháp phần mềm. Kiểm thử và thiết kế hệ thống"
            }
          ].map((exp, index) => (
            <motion.div
              key={index}
              className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'} md:w-1/2`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 md:block hidden"></div>
              
              <motion.div 
                className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <FiBriefcase className="w-6 h-6 text-blue-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                </div>
                <h4 className="text-lg text-blue-400 font-semibold mb-2">{exp.position}</h4>
                <p className="text-gray-400 font-medium mb-3">{exp.duration}</p>
                <p className="text-gray-300 leading-relaxed">{exp.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="py-20 px-4 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Dự Án Nổi Bật
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            title="TFashion Shop"
            description="E-commerce platform với full features: shopping cart, payment integration, admin dashboard, và responsive design."
            technologies={["React.js", "Node.js", "MongoDB", "Stripe"]}
            delay={0}
          />
          <ProjectCard
            title="Mercedes Website"
            description="Website bán xe Mercedes cao cấp với 3D car viewer, configurator, và hệ thống booking test drive."
            technologies={["Next.js", "Three.js", "PostgreSQL", "TypeScript"]}
            delay={0.1}
          />
          <ProjectCard
            title="Learning Management System"
            description="Hệ thống quản lý học tập hoàn chỉnh với video streaming, quizzes, progress tracking và certificates."
            technologies={["React.js", "Python", "Flask", "MySQL"]}
            delay={0.2}
          />
          <ProjectCard
            title="AI Behavior Detection"
            description="Hệ thống phát hiện hành động bất thường sử dụng Computer Vision và Machine Learning."
            technologies={["Python", "TensorFlow", "OpenCV", "Flask"]}
            delay={0.3}
          />
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="py-16 px-4 bg-gray-800 mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h3 
            className="text-3xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Sẵn Sàng Hợp Tác?
          </motion.h3>
          
          <motion.p 
            className="text-gray-400 mb-8 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hãy liên hệ với tôi để thảo luận về dự án của bạn!
          </motion.p>

          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {[
              { icon: FiMail, url: "mailto:dovanthuan@example.com", label: "Email" },
              { icon: FiLinkedin, url: "https://linkedin.com", label: "LinkedIn" },
              { icon: FiGithub, url: "https://github.com", label: "GitHub" }
            ].map((contact, index) => (
              <motion.a
                key={index}
                href={contact.url}
                className="flex items-center space-x-3 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <contact.icon className="w-5 h-5" />
                <span className="font-medium">{contact.label}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="mt-12 pt-8 border-t border-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-gray-500">
              © 2024 Đỗ Văn Thuận. All rights reserved. Made with ❤️ and lots of ☕
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;