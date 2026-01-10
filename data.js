/* data.js */
const portfolioData = {
    name: "Christo Mathew",
    title: "Applied AI & Robotics Engineer",
    bio: "Applied AI Engineer bridging the gap between Deep Reinforcement Learning and Real-World Robotics. Specializing in continuous control, sim-to-real transfer, and robust vision-based policies.",

    // Profile Photos
    heroPhoto: "images/profile.jpg", // Photo for hero section
    aboutPhoto: "images/profile.jpg", // Photo for about section

    // Detailed About Section
    about: {
        text: "I am an engineer focused on the 'Body' of Artificial Intelligence. While the industry focuses on LLMs (the brain), I build the control stacks that allow AI to interact with the physical world. My expertise lies in designing stable Reinforcement Learning algorithms for continuous control tasks and engineering computer vision pipelines for real-time perception. I have a strong foundation in the mathematics of policy gradients (PPO/A2C) and the systems engineering required to deploy them.",
        education: "Master's in Computer Science - Rutgers University",
        experience: "Research Assistant @ Rutgers University | Focus: RL for Complex Reasoning"
    },

    /// Skills Section 
    skills: [
        {
            name: "Robotics & Control", // Rebranded from "Reinforcement Learning"
            icon: "fas fa-robot",
            description: "Proximal Policy Optimization (PPO), A2C, GAE, Reward Engineering, Curriculum Learning, MuJoCo, Gymnasium"
        },
        {
            name: "Computer Vision",
            icon: "fas fa-eye",
            description: "Real-Time Object Tracking (DeepSORT), YOLOv11, Domain Randomization, Vision Transformers (ViT), OpenCV"
        },
        {
            name: "Deep Learning Fundamentals",
            icon: "fas fa-brain",
            description: "PyTorch, TensorFlow, Architecture Design (CNNs/MLPs), Transformers, Variance Reduction, Hyperparameter Tuning"
        },
        {
            name: "Engineering Stack",
            icon: "fas fa-cogs",
            description: "Linux, Docker, Git, WandB (Experiment Tracking), CI/CD, Parallel Computing"
        },
        {
            name: "Math & Theory",
            icon: "fas fa-square-root-alt",
            description: "Markov Decision Processes (MDPs), Linear Algebra, Probability Theory, Monte-Carlo Methods"
        }
    ],

    // Social Links
    socials: {
        github: "https://github.com/christo357",
        linkedin: "https://linkedin.com/in/christo-m7",
        // twitter: "https://twitter.com/yourusername" // optional
    },

    // Contact Information
    contact: {
        // email: "christomathew2001@gmail.com", // Update with your actual email
        location: "Available for Remote Work (USA)",
        text: "I am actively looking for roles in Embodied AI, Robotics Simulation, and ML Engineering. Let's build agents that work."
    },

    // Publications
    publications: [
        {
            title: "Toward a Metrology for Artificial Intelligence: Hidden-Rule Environments and Reinforcement Learning",
            authors: "Christo Mathew, Wentian Wang, Jacob Feldman, Lazaros K. Gallos, Paul B. Kantor, Vladimir Menkov, Hao Wang",
            venue: "arXiv [2509.06213]",
            year: "2025",
            arxivId: "2509.06213",
            arxivUrl: "https://arxiv.org/abs/2509.06213",
            description: "Investigated the impact of state representation on RL performance in the Game Of Hidden Rules (GOHR). Conducted a comparative analysis of Object-Centric vs. Feature-Centric architectures, demonstrating that object-level inductive biases significantly improve sample efficiency in latent-rule discovery.",
            tags: ["Reinforcement Learning", "Reasoning", "Paper"]
            // Add more publications as needed
        },
    ],

    // Projects
    projects: [
        {
            title: "Object-Centric A2C for Latent Reasoning",
            sectionTitle: "Research & Publications",
            tags: ["Transformer-A2C", "Object-Centric Learning", "State Representation"],
            imageUrl: "images/gohr.png", // Use a screenshot from your PDF here if possible
            description: "Featured on arXiv (2509.06213). Investigated the failure modes of Actor-Critic methods in environments with non-stationary hidden rules. Engineered a custom Gymnasium environment to benchmark agent adaptability.",
            featured: true,
            links: [
                { text: "Read Paper", url: "https://arxiv.org/abs/2509.06213" }
            ]
        },

        // 2. The Reacher (Your strongest Code)
        {
            title: "Continuous Control Policy Optimization",
            sectionTitle: "Robotics & Control",
            tags: ["PPO", "Generalized Advantage Estimation", "Parallel Computing", "MuJoCo"],
            videoUrl: "assets/ppo_reacher.mp4",
            description: "Engineered a high-throughput Proximal Policy Optimization (PPO) agent for the Reacher-v2 task. Solved the 'sparse reward' problem by implementing Generalized Advantage Estimation (GAE) and utilizing 16-process parallel environments (VectorEnv) to increase sample efficiency by 400%. Demonstrated robust convergence on unstable dynamics.",
            featured: true,
            links: [
                { text: "View Architecture", url: "https://github.com/christo357/RL_experiments/blob/main/5_ppo/ppo_reacher.py" }
            ]
        },

        // 3. The Vision Project (The "Hire Me" Project)
        {
            title: "Real-Time Human-Robot Interaction System",
            sectionTitle: "Computer Vision",
            tags: ["YOLOv11", "DeepSORT", "Latency Optimization", "Human-Computer Interaction"],
            imageUrl: "images/treasure_finder.png",
            description: "Built an end-to-end perception pipeline integrating YOLOv11 for state-of-the-art detection and DeepSORT for multi-object tracking. Engineered a logic layer to gamify real-world video feeds, optimizing the pipeline for <15ms inference time on consumer hardware.",
            featured: true,
            links: [
                { text: "View Code", url: "https://github.com/christo357/Treasure-Finder/tree/main" }
            ]
        },

        // 4. Double Pendulum (The Math Flex)
        {
            title: "Stabilization of Non-Linear Dynamics",
            sectionTitle: "Robotics & Control",
            tags: ["A2C", "Variance Reduction", "Entropy Regularization", "PyTorch"],
            videoUrl: "assets/ppo_inv_doublependulum.mp4",
            description: "Comparative analysis of synchronous (A2C) vs. asynchronous policy gradient methods. Tackled the 'catastrophic forgetting' problem inherent in chaotic double-pendulum dynamics by tuning entropy regularization coefficients and bootstrap value targets.",
            links: [
                { text: "View PPO Implementation", url: "https://github.com/christo357/RL_experiments/blob/main/5_ppo/ppo_invdoublependulum_parallel.py" },
                { text: "View A2C Implementation", url: "https://github.com/christo357/RL_experiments/blob/main/4_a2c_gae/a2c_invdoublependulum_optimized.py" }
            ]
        },

        // 5. N-Step (The Theory Flex)
        {
            title: "N-Step Bootstrapping Analysis",
            sectionTitle: "Robotics & Control",
            tags: ["TD-Lambda", "Credit Assignment", "Algorithm Design"],
            videoUrl: "assets/nstep_a2c_balancing_invpendulum.mp4",
            description: "Investigated the bias-variance tradeoff in Temporal Difference learning. Implemented N-Step Actor-Critic to empirically demonstrate how increasing the rollout horizon reduces bias in value estimation at the cost of higher variance.",
            links: [
                { text: "View Code", url: "https://github.com/christo357/RL_experiments/blob/main/3_nstep_actorcritic/nstep_actorcritic_invertedpendulum.py" }
            ]
        },

        // 6. SHViT (The Vision Research)
        {
            title: "Vision Transformer (ViT) Robustness Analysis",
            sectionTitle: "Computer Vision Research",
            tags: ["Transformers", "Inductive Bias", "Model Robustness"],
            imageUrl: "images/shvit.png",
            description: "Research project quantifying the inductive bias of Single-Head Vision Transformers (SHViT). Conducted ablation studies across domain shifts to measure generalization capabilities compared to standard CNN baselines.",
            links: [
                { text: "View Analysis", url: "https://github.com/christo357/SHViT" }
            ]
        }        // {
        //     title: " ",
        //     sectionTitle: "",
        //     tags: ["PyTorch",],
        //     // Replace with the raw link to your video or a local path like 'assets/pendulum.mp4'
        //     // videoUrl: "https://user-images.githubusercontent.com/your-video-link.mp4", 
        //     videoUrl: "",
        //     description: "",
        //     // links: [
        //     //     { text: "View Code", url: "https://github.com/christo357/inverted-pendulum-a2c" },
        //     //     { text: "WandB Report", url: "https://api.wandb.ai/links/cm1788-rutgers-university/99zgclmd" }
        //     // ]
        // },

    ]
};
