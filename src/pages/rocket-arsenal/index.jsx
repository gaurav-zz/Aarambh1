import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import RocketCard from './components/RocketCard';
import FilterPanel from './components/FilterPanel';
import RocketModal from './components/RocketModal';
import StatsOverview from './components/StatsOverview';

const RocketArsenal = () => {
  const [rockets, setRockets] = useState([]);
  const [filteredRockets, setFilteredRockets] = useState([]);
  const [selectedRocket, setSelectedRocket] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterCollapsed, setIsFilterCollapsed] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [filters, setFilters] = useState({
    competition: 'all',
    year: 'all',
    status: 'all',
    category: 'all',
    sortBy: 'newest',
    minPerformance: 0,
    hasVideo: false,
    has3DModel: false,
    hasCAD: false
  });

  // Mock rocket data
  const mockRockets = [
    {
      id: 1,
      name: "Phoenix Rising",
      competition: "Spaceport America Cup",
      year: "2024",
      status: "active",
      category: "high-power",
      ranking: 3,
      performanceScore: 94,
      flightCount: 5,
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop",
      missionPatch: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=200&h=200&fit=crop",
      description: "Advanced hybrid rocket featuring innovative recovery system and real-time telemetry.",
      fullDescription: `Phoenix Rising represents the pinnacle of our team's engineering capabilities, featuring a revolutionary hybrid propulsion system that combines the reliability of solid motors with the controllability of liquid systems. This rocket incorporates cutting-edge avionics, dual-deployment recovery, and comprehensive telemetry systems that provide real-time flight data.\n\nThe project pushed the boundaries of student rocketry with its innovative carbon fiber airframe, custom-designed recovery bay, and sophisticated flight computer capable of autonomous flight decisions. The rocket's modular design allows for rapid configuration changes and extensive testing capabilities.`,
      specifications: {
        height: "12.5 ft",
        mass: "85 lbs",
        motor: "O3400-C",
        maxAltitude: "30,000 ft"
      },
      detailedSpecs: {
        totalLength: "12.5 ft (3.81 m)",
        diameter: "6.17 in (15.7 cm)",
        wetMass: "85 lbs (38.6 kg)",
        dryMass: "45 lbs (20.4 kg)",
        motorDesignation: "O3400-C",
        totalImpulse: "10,240 N⋅s",
        burnTime: "3.2 seconds",
        maxThrust: "3,400 N",
        recoverySystem: "Dual-deployment parachute",
        mainChuteSize: "108 in diameter",
        drogueChuteSize: "24 in diameter",
        avionicsSystem: "Custom flight computer with GPS",
        telemetryRange: "50+ miles",
        constructionMaterial: "Carbon fiber composite"
      },
      technologies: ["Hybrid Propulsion", "Carbon Fiber", "Real-time Telemetry", "Dual Recovery", "GPS Tracking", "Custom Avionics"],
      achievements: [
        {
          title: "3rd Place Overall",
          description: "Spaceport America Cup 2024 - 30k COTS Category"
        },
        {
          title: "Innovation Award",
          description: "Best use of hybrid propulsion technology"
        },
        {
          title: "Altitude Record",
          description: "Team altitude record of 29,847 feet"
        }
      ],
      performanceMetrics: [
        { label: "Max Altitude", value: "29,847", unit: "feet", icon: "ArrowUp" },
        { label: "Max Velocity", value: "1,247", unit: "mph", icon: "Zap" },
        { label: "Flight Time", value: "156", unit: "seconds", icon: "Clock" },
        { label: "Recovery Success", value: "100", unit: "%", icon: "Target" }
      ],
      lessonsLearned: [
        {
          title: "Hybrid Motor Optimization",
          description: "Fine-tuning the oxidizer flow rate improved combustion efficiency by 15% and reduced thrust oscillations."
        },
        {
          title: "Recovery System Reliability",
          description: "Implementing redundant deployment charges and improved packing techniques achieved 100% recovery success rate."
        },
        {
          title: "Telemetry Range Enhancement",
          description: "Upgrading to higher-gain antennas extended real-time data transmission range to over 50 miles."
        }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&h=600&fit=crop"
      ],
      patchStory: "The Phoenix Rising mission patch symbolizes rebirth and innovation, featuring a phoenix emerging from flames with rocket trails forming its wings. The design represents our team's resilience and continuous improvement philosophy.",
      documentation: [
        {
          title: "Technical Design Report",
          description: "Comprehensive 150-page technical documentation",
          type: "pdf",
          size: "12.5 MB"
        },
        {
          title: "Flight Data Analysis",
          description: "Post-flight performance analysis and telemetry data",
          type: "pdf",
          size: "8.2 MB"
        },
        {
          title: "Safety Review Documentation",
          description: "Complete safety analysis and risk assessment",
          type: "pdf",
          size: "5.7 MB"
        }
      ],
      cadFiles: [
        {
          name: "Complete Assembly",
          description: "Full rocket assembly with all components",
          format: "STEP",
          size: "45.2 MB"
        },
        {
          name: "Airframe Components",
          description: "Individual airframe sections and couplers",
          format: "SOLIDWORKS",
          size: "23.8 MB"
        }
      ]
    },
    {
      id: 2,
      name: "Stellar Voyager",
      competition: "NASA USLI",
      year: "2023",
      status: "retired",
      category: "mid-power",
      ranking: 7,
      performanceScore: 87,
      flightCount: 8,
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop",
      missionPatch: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=200&h=200&fit=crop",
      description: "Reliable workhorse rocket with proven track record in multiple competitions.",
      fullDescription: `Stellar Voyager served as our team's primary competition vehicle for the 2023 season, demonstrating exceptional reliability and consistent performance across multiple launches. This rocket featured a traditional but refined design approach, focusing on proven technologies and robust construction methods.\n\nThe project emphasized manufacturing excellence and quality control, resulting in a vehicle that could be rapidly prepared for launch and consistently deliver predictable performance. Its success laid the foundation for our more advanced Phoenix Rising project.`,
      specifications: {
        height: "10.2 ft",
        mass: "62 lbs",
        motor: "L1150-P",
        maxAltitude: "18,500 ft"
      },
      detailedSpecs: {
        totalLength: "10.2 ft (3.11 m)",
        diameter: "4.0 in (10.2 cm)",
        wetMass: "62 lbs (28.1 kg)",
        dryMass: "35 lbs (15.9 kg)",
        motorDesignation: "L1150-P",
        totalImpulse: "2,560 N⋅s",
        burnTime: "2.8 seconds",
        maxThrust: "1,150 N",
        recoverySystem: "Single-deployment parachute",
        mainChuteSize: "72 in diameter",
        avionicsSystem: "Commercial altimeter",
        constructionMaterial: "Fiberglass composite"
      },
      technologies: ["Fiberglass Construction", "Commercial Avionics", "Single Recovery", "Traditional Design"],
      achievements: [
        {
          title: "7th Place Overall",
          description: "NASA USLI 2023 Competition"
        },
        {
          title: "Reliability Award",
          description: "Most consistent performance across all flights"
        }
      ],
      performanceMetrics: [
        { label: "Max Altitude", value: "18,234", unit: "feet", icon: "ArrowUp" },
        { label: "Max Velocity", value: "892", unit: "mph", icon: "Zap" },
        { label: "Flight Time", value: "98", unit: "seconds", icon: "Clock" },
        { label: "Recovery Success", value: "100", unit: "%", icon: "Target" }
      ],
      lessonsLearned: [
        {
          title: "Manufacturing Consistency",
          description: "Standardized manufacturing processes improved build quality and reduced assembly time by 30%."
        },
        {
          title: "Launch Operations",
          description: "Streamlined pre-flight procedures enabled faster turnaround times between launches."
        }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop"
      ],
      patchStory: "The Stellar Voyager patch features a classic rocket silhouette against a starfield, representing our commitment to traditional rocketry excellence and reliable performance.",
      documentation: [
        {
          title: "Design Documentation",
          description: "Complete design and analysis documentation",
          type: "pdf",
          size: "8.9 MB"
        },
        {
          title: "Flight Reports",
          description: "All flight test reports and data analysis",
          type: "pdf",
          size: "6.3 MB"
        }
      ],
      cadFiles: [
        {
          name: "Rocket Assembly",
          description: "Complete rocket CAD model",
          format: "STEP",
          size: "28.4 MB"
        }
      ]
    },
    {
      id: 3,
      name: "Quantum Leap",
      competition: "IREC",
      year: "2024",
      status: "development",
      category: "experimental",
      ranking: 1,
      performanceScore: 98,
      flightCount: 2,
      image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&h=600&fit=crop",
      missionPatch: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=200&h=200&fit=crop",
      description: "Cutting-edge experimental rocket pushing the boundaries of student rocketry technology.",
      fullDescription: `Quantum Leap represents our most ambitious project to date, incorporating experimental technologies and innovative design approaches that push the boundaries of what's possible in student rocketry. This rocket serves as a testbed for advanced propulsion concepts, autonomous flight systems, and next-generation materials.\n\nThe project embodies our commitment to innovation and technical excellence, featuring technologies that may define the future of small-scale rocketry. Every system has been designed from first principles to optimize performance and reliability.`,
      specifications: {
        height: "14.8 ft",
        mass: "95 lbs",
        motor: "P2500-X",
        maxAltitude: "45,000 ft"
      },
      detailedSpecs: {
        totalLength: "14.8 ft (4.51 m)",
        diameter: "6.0 in (15.2 cm)",
        wetMass: "95 lbs (43.1 kg)",
        dryMass: "52 lbs (23.6 kg)",
        motorDesignation: "P2500-X (Experimental)",
        totalImpulse: "15,680 N⋅s",
        burnTime: "4.1 seconds",
        maxThrust: "2,500 N",
        recoverySystem: "Autonomous deployment system",
        mainChuteSize: "120 in diameter",
        drogueChuteSize: "30 in diameter",
        avionicsSystem: "AI-powered flight computer",
        telemetryRange: "100+ miles",
        constructionMaterial: "Advanced carbon composite"
      },
      technologies: ["AI Flight Control", "Advanced Composites", "Experimental Propulsion", "Autonomous Systems", "Machine Learning", "Advanced Telemetry"],
      achievements: [
        {
          title: "1st Place Innovation",
          description: "IREC 2024 - Most Innovative Design"
        },
        {
          title: "Technical Excellence",
          description: "Highest technical score in competition history"
        },
        {
          title: "Altitude Achievement",
          description: "New student rocket altitude record"
        }
      ],
      performanceMetrics: [
        { label: "Max Altitude", value: "44,892", unit: "feet", icon: "ArrowUp" },
        { label: "Max Velocity", value: "1,654", unit: "mph", icon: "Zap" },
        { label: "Flight Time", value: "203", unit: "seconds", icon: "Clock" },
        { label: "Recovery Success", value: "100", unit: "%", icon: "Target" }
      ],
      lessonsLearned: [
        {
          title: "AI Integration Challenges",
          description: "Implementing machine learning algorithms in real-time flight systems required extensive testing and validation."
        },
        {
          title: "Advanced Materials",
          description: "Working with next-generation composites demanded new manufacturing techniques and quality control methods."
        },
        {
          title: "System Integration",
          description: "Coordinating multiple advanced subsystems required sophisticated integration testing and validation procedures."
        }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=800&h=600&fit=crop"
      ],
      patchStory: "The Quantum Leap patch features a stylized quantum particle trail forming a rocket trajectory, symbolizing the leap from theoretical physics to practical engineering applications.",
      documentation: [
        {
          title: "Advanced Systems Documentation",
          description: "Comprehensive documentation of all experimental systems",
          type: "pdf",
          size: "18.7 MB"
        },
        {
          title: "AI Algorithm Documentation",
          description: "Machine learning implementation and validation",
          type: "pdf",
          size: "12.4 MB"
        },
        {
          title: "Materials Testing Report",
          description: "Advanced composite materials characterization",
          type: "pdf",
          size: "9.8 MB"
        }
      ],
      cadFiles: [
        {
          name: "Complete System Model",
          description: "Full rocket with all experimental systems",
          format: "STEP",
          size: "67.3 MB"
        },
        {
          name: "Propulsion System",
          description: "Experimental motor and feed system",
          format: "SOLIDWORKS",
          size: "34.2 MB"
        }
      ]
    },
    {
      id: 4,
      name: "Thunder Strike",
      competition: "Battle of the Rockets",
      year: "2022",
      status: "retired",
      category: "high-power",
      ranking: 5,
      performanceScore: 82,
      flightCount: 12,
      image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=800&h=600&fit=crop",
      missionPatch: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=200&h=200&fit=crop",
      description: "High-power rocket that served as our team\'s introduction to advanced rocketry competitions.",
      fullDescription: `Thunder Strike marked our team's entry into high-power rocketry competitions and served as a crucial learning platform for advanced rocket systems. This project taught us the fundamentals of high-power motor integration, advanced recovery systems, and competition-level documentation requirements.\n\nWhile not our most sophisticated rocket, Thunder Strike's importance cannot be overstated - it provided the foundation of knowledge and experience that enabled all our subsequent achievements. The lessons learned from this project directly influenced the design and success of our later vehicles.`,
      specifications: {
        height: "9.8 ft",
        mass: "58 lbs",
        motor: "M1378-P",
        maxAltitude: "22,000 ft"
      },
      detailedSpecs: {
        totalLength: "9.8 ft (2.99 m)",
        diameter: "5.5 in (14.0 cm)",
        wetMass: "58 lbs (26.3 kg)",
        dryMass: "32 lbs (14.5 kg)",
        motorDesignation: "M1378-P",
        totalImpulse: "5,120 N⋅s",
        burnTime: "3.7 seconds",
        maxThrust: "1,378 N",
        recoverySystem: "Dual-deployment parachute",
        mainChuteSize: "84 in diameter",
        drogueChuteSize: "18 in diameter",
        avionicsSystem: "Dual altimeter setup",
        constructionMaterial: "Phenolic and fiberglass"
      },
      technologies: ["High-Power Motors", "Dual Altimeters", "Phenolic Construction", "Competition Documentation"],
      achievements: [
        {
          title: "5th Place Overall",
          description: "Battle of the Rockets 2022"
        },
        {
          title: "Team Foundation",
          description: "Established our high-power rocketry capabilities"
        }
      ],
      performanceMetrics: [
        { label: "Max Altitude", value: "21,567", unit: "feet", icon: "ArrowUp" },
        { label: "Max Velocity", value: "1,023", unit: "mph", icon: "Zap" },
        { label: "Flight Time", value: "127", unit: "seconds", icon: "Clock" },
        { label: "Recovery Success", value: "92", unit: "%", icon: "Target" }
      ],
      lessonsLearned: [
        {
          title: "High-Power Integration",
          description: "Learning to work with high-power motors required new safety protocols and handling procedures."
        },
        {
          title: "Competition Preparation",
          description: "Understanding competition requirements and documentation standards was crucial for success."
        }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop"
      ],
      patchStory: "The Thunder Strike patch features a lightning bolt integrated with a rocket silhouette, representing the power and energy of our first high-power rocket.",
      documentation: [
        {
          title: "Project Documentation",
          description: "Complete project documentation and analysis",
          type: "pdf",
          size: "7.2 MB"
        },
        {
          title: "Flight Test Results",
          description: "All flight test data and analysis",
          type: "pdf",
          size: "4.8 MB"
        }
      ],
      cadFiles: [
        {
          name: "Rocket Model",
          description: "Complete rocket CAD assembly",
          format: "STEP",
          size: "19.6 MB"
        }
      ]
    },
    {
      id: 5,
      name: "Nebula Explorer",
      competition: "Spaceport America Cup",
      year: "2023",
      status: "testing",
      category: "mid-power",
      ranking: 12,
      performanceScore: 76,
      flightCount: 3,
      image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&h=600&fit=crop",
      missionPatch: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=200&h=200&fit=crop",
      description: "Mid-power rocket designed for payload deployment and scientific data collection.",
      fullDescription: `Nebula Explorer was designed as a specialized payload deployment vehicle, focusing on scientific data collection and autonomous payload operations. This rocket served as a testbed for payload integration techniques and scientific instrumentation that would later be incorporated into our more advanced vehicles.\n\nThe project emphasized payload bay design, data collection systems, and autonomous payload deployment mechanisms. While not achieving top competition rankings, Nebula Explorer provided valuable experience in scientific mission planning and execution.`,
      specifications: {
        height: "11.3 ft",
        mass: "67 lbs",
        motor: "L850-P",
        maxAltitude: "15,000 ft"
      },
      detailedSpecs: {
        totalLength: "11.3 ft (3.44 m)",
        diameter: "4.5 in (11.4 cm)",
        wetMass: "67 lbs (30.4 kg)",
        dryMass: "38 lbs (17.2 kg)",
        motorDesignation: "L850-P",
        totalImpulse: "1,920 N⋅s",
        burnTime: "2.3 seconds",
        maxThrust: "850 N",
        recoverySystem: "Payload-integrated recovery",
        mainChuteSize: "78 in diameter",
        payloadBayVolume: "2.1 liters",
        avionicsSystem: "Payload-focused flight computer",
        constructionMaterial: "Aluminum and fiberglass"
      },
      technologies: ["Payload Integration", "Scientific Instruments", "Data Collection", "Autonomous Deployment"],
      achievements: [
        {
          title: "12th Place Overall",
          description: "Spaceport America Cup 2023"
        },
        {
          title: "Payload Innovation",
          description: "Successful autonomous payload deployment"
        }
      ],
      performanceMetrics: [
        { label: "Max Altitude", value: "14,782", unit: "feet", icon: "ArrowUp" },
        { label: "Max Velocity", value: "743", unit: "mph", icon: "Zap" },
        { label: "Flight Time", value: "89", unit: "seconds", icon: "Clock" },
        { label: "Payload Success", value: "100", unit: "%", icon: "Target" }
      ],
      lessonsLearned: [
        {
          title: "Payload Integration",
          description: "Balancing payload requirements with rocket performance required careful design optimization."
        },
        {
          title: "Scientific Mission Planning",
          description: "Planning scientific missions required different approaches compared to pure performance flights."
        }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop"
      ],
      patchStory: "The Nebula Explorer patch depicts a stylized nebula with scientific instruments, representing our mission to explore and understand through scientific investigation.",
      documentation: [
        {
          title: "Payload Documentation",
          description: "Complete payload system documentation",
          type: "pdf",
          size: "9.4 MB"
        },
        {
          title: "Scientific Results",
          description: "Data collection results and analysis",
          type: "pdf",
          size: "6.7 MB"
        }
      ],
      cadFiles: [
        {
          name: "Payload System",
          description: "Payload bay and deployment mechanism",
          format: "STEP",
          size: "25.8 MB"
        }
      ]
    },
    {
      id: 6,
      name: "Cosmos Pioneer",
      competition: "NASA USLI",
      year: "2024",
      status: "active",
      category: "low-power",
      ranking: 8,
      performanceScore: 89,
      flightCount: 15,
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop",
      missionPatch: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=200&h=200&fit=crop",
      description: "Educational outreach rocket designed for demonstrations and STEM engagement.",
      fullDescription: `Cosmos Pioneer was specifically designed for educational outreach and STEM engagement activities. This rocket serves as our primary demonstration vehicle for school visits, public events, and educational workshops. Its design prioritizes safety, reliability, and educational value over pure performance.\n\nThe project has been instrumental in inspiring the next generation of aerospace engineers and has been launched over 15 times at various educational events. Its robust design and predictable performance make it ideal for educational demonstrations.`,
      specifications: {
        height: "8.2 ft",
        mass: "28 lbs",
        motor: "I285-P",
        maxAltitude: "3,500 ft"
      },
      detailedSpecs: {
        totalLength: "8.2 ft (2.50 m)",
        diameter: "3.0 in (7.6 cm)",
        wetMass: "28 lbs (12.7 kg)",
        dryMass: "18 lbs (8.2 kg)",
        motorDesignation: "I285-P",
        totalImpulse: "640 N⋅s",
        burnTime: "2.8 seconds",
        maxThrust: "285 N",
        recoverySystem: "Single parachute",
        mainChuteSize: "36 in diameter",
        avionicsSystem: "Educational flight computer",
        constructionMaterial: "Cardboard and plastic",
        safetyFeatures: "Multiple redundant systems"
      },
      technologies: ["Educational Design", "Safety Systems", "Demonstration Features", "STEM Integration"],
      achievements: [
        {
          title: "8th Place Overall",
          description: "NASA USLI 2024 - Educational Category"
        },
        {
          title: "Outreach Impact",
          description: "Reached over 2,000 students through demonstrations"
        },
        {
          title: "Safety Record",
          description: "Perfect safety record across all flights"
        }
      ],
      performanceMetrics: [
        { label: "Max Altitude", value: "3,456", unit: "feet", icon: "ArrowUp" },
        { label: "Max Velocity", value: "287", unit: "mph", icon: "Zap" },
        { label: "Flight Time", value: "45", unit: "seconds", icon: "Clock" },
        { label: "Safety Record", value: "100", unit: "%", icon: "Shield" }
      ],
      lessonsLearned: [
        {
          title: "Educational Design",
          description: "Designing for education required different priorities than competition rockets, emphasizing safety and visibility."
        },
        {
          title: "Public Engagement",
          description: "Effective public engagement required clear explanations and visible demonstrations of rocket principles."
        }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=800&h=600&fit=crop"
      ],
      patchStory: "The Cosmos Pioneer patch features a simple rocket with educational symbols, representing our commitment to inspiring future aerospace engineers through hands-on learning.",
      documentation: [
        {
          title: "Educational Materials",
          description: "Complete educational curriculum and materials",
          type: "pdf",
          size: "5.3 MB"
        },
        {
          title: "Safety Procedures",
          description: "Comprehensive safety procedures for demonstrations",
          type: "pdf",
          size: "3.8 MB"
        }
      ],
      cadFiles: [
        {
          name: "Educational Model",
          description: "Simplified CAD model for educational use",
          format: "STEP",
          size: "12.4 MB"
        }
      ]
    }
  ];

  useEffect(() => {
    setRockets(mockRockets);
    setFilteredRockets(mockRockets);
  }, []);

  useEffect(() => {
    let filtered = [...rockets];

    // Apply filters
    if (filters?.competition !== 'all') {
      filtered = filtered?.filter(rocket => rocket?.competition?.toLowerCase()?.includes(filters?.competition?.toLowerCase()));
    }

    if (filters?.year !== 'all') {
      filtered = filtered?.filter(rocket => rocket?.year === filters?.year);
    }

    if (filters?.status !== 'all') {
      filtered = filtered?.filter(rocket => rocket?.status === filters?.status);
    }

    if (filters?.category !== 'all') {
      filtered = filtered?.filter(rocket => rocket?.category === filters?.category);
    }

    if (filters?.minPerformance > 0) {
      filtered = filtered?.filter(rocket => rocket?.performanceScore >= filters?.minPerformance);
    }

    if (filters?.hasVideo) {
      filtered = filtered?.filter(rocket => rocket?.gallery && rocket?.gallery?.length > 0);
    }

    if (filters?.has3DModel) {
      filtered = filtered?.filter(rocket => rocket?.technologies?.includes('3D Model') || rocket?.cadFiles?.length > 0);
    }

    if (filters?.hasCAD) {
      filtered = filtered?.filter(rocket => rocket?.cadFiles && rocket?.cadFiles?.length > 0);
    }

    // Apply sorting
    switch (filters?.sortBy) {
      case 'newest':
        filtered?.sort((a, b) => parseInt(b?.year) - parseInt(a?.year));
        break;
      case 'oldest':
        filtered?.sort((a, b) => parseInt(a?.year) - parseInt(b?.year));
        break;
      case 'performance':
        filtered?.sort((a, b) => b?.performanceScore - a?.performanceScore);
        break;
      case 'altitude':
        filtered?.sort((a, b) => {
          const altA = parseInt(a?.specifications?.maxAltitude?.replace(/[^\d]/g, ''));
          const altB = parseInt(b?.specifications?.maxAltitude?.replace(/[^\d]/g, ''));
          return altB - altA;
        });
        break;
      case 'name':
        filtered?.sort((a, b) => a?.name?.localeCompare(b?.name));
        break;
      default:
        break;
    }

    setFilteredRockets(filtered);
  }, [rockets, filters]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      competition: 'all',
      year: 'all',
      status: 'all',
      category: 'all',
      sortBy: 'newest',
      minPerformance: 0,
      hasVideo: false,
      has3DModel: false,
      hasCAD: false
    });
  };

  const handleViewDetails = (rocket) => {
    setSelectedRocket(rocket);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRocket(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Rocket Arsenal - RocketryXyz Portfolio</title>
        <meta name="description" content="Comprehensive showcase of RocketryXyz's rocket projects, technical specifications, and engineering innovations. Explore our complete arsenal of competition rockets." />
        <meta name="keywords" content="rocket arsenal, student rocketry, technical specifications, engineering projects, competition rockets" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-primary via-secondary to-primary overflow-hidden">
        <div className="absolute inset-0 mission-grid opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center">
            {/* Mission Status */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-mission-pulse"></div>
              <span className="text-white text-sm font-medium">Arsenal Status: Active</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Rocket Arsenal
              <span className="block text-2xl md:text-3xl font-normal text-white/80 mt-2">
                Engineering Excellence in Flight
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Explore our comprehensive collection of competition rockets, each representing years of engineering innovation, 
              technical excellence, and the relentless pursuit of aerospace advancement.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{rockets?.length}</div>
                <div className="text-white/80 text-sm">Total Rockets</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{rockets?.filter(r => r?.status === 'active')?.length}</div>
                <div className="text-white/80 text-sm">Active Fleet</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">45,000</div>
                <div className="text-white/80 text-sm">Max Altitude (ft)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-white/80 text-sm">Best Performance</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </section>
      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Statistics Overview */}
          <div className="mb-12">
            <StatsOverview rockets={rockets} />
          </div>

          {/* Filter Panel */}
          <div className="mb-8">
            <FilterPanel
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
              totalResults={filteredRockets?.length}
              isCollapsed={isFilterCollapsed}
              onToggleCollapse={() => setIsFilterCollapsed(!isFilterCollapsed)}
            />
          </div>

          {/* View Controls */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-bold text-text-primary">
                Arsenal Collection
              </h2>
              <span className="text-text-secondary">
                {filteredRockets?.length} rocket{filteredRockets?.length !== 1 ? 's' : ''}
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex items-center bg-muted rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' ?'bg-primary text-primary-foreground' :'text-text-secondary hover:text-primary'
                  }`}
                >
                  <Icon name="Grid3X3" size={18} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' ?'bg-primary text-primary-foreground' :'text-text-secondary hover:text-primary'
                  }`}
                >
                  <Icon name="List" size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Rockets Grid */}
          {filteredRockets?.length > 0 ? (
            <div className={`grid gap-8 ${
              viewMode === 'grid' ?'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' :'grid-cols-1'
            }`}>
              {filteredRockets?.map((rocket) => (
                <RocketCard
                  key={rocket?.id}
                  rocket={rocket}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Search" size={32} className="text-text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">No Rockets Found</h3>
              <p className="text-text-secondary mb-6">
                Try adjusting your filters to see more results.
              </p>
              <Button
                variant="outline"
                iconName="RotateCcw"
                iconPosition="left"
                onClick={handleClearFilters}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Launch Your Partnership?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join our mission to push the boundaries of student rocketry and inspire the next generation of aerospace engineers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              iconName="Handshake"
              iconPosition="left"
              className="bg-white text-primary hover:bg-white/90"
            >
              Partner With Us
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Download"
              iconPosition="left"
              className="border-white text-white hover:bg-white/10"
            >
              Download Media Kit
            </Button>
          </div>
        </div>
      </section>
      {/* Rocket Detail Modal */}
      <RocketModal
        rocket={selectedRocket}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default RocketArsenal;