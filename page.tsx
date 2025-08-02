"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, Zap, Target, TrendingUp, ArrowUp, ArrowDown, RotateCcw, Dumbbell, Brain, Gauge } from "lucide-react"

const categories = [
  "All",
  "Lower Body - Squats",
  "Lower Body - Deadlifts",
  "Lower Body - Lunges",
  "Upper Body Push - Bench",
  "Upper Body Push - Overhead",
  "Upper Body Push - Dips",
  "Upper Body Pull - Vertical",
  "Upper Body Pull - Horizontal",
  "Olympic Lifts",
  "Functional",
  "Isolation - Arms",
  "Isolation - Shoulders",
  "Isolation - Legs",
]

const movements = [
  // LOWER BODY - SQUATS
  {
    id: "back-squat",
    name: "Back Squat",
    category: "Lower Body - Squats",
    difficulty: "Intermediate",
    primaryMuscles: ["Quadriceps", "Glutes", "Core", "Erector Spinae"],
    physics: {
      leverSystem: "Class 2 Lever",
      forceVector: "Vertical",
      mechanicalAdvantage: "Medium",
      energySystem: "Phosphocreatine",
      stickingPoint: "Bottom position (90° knee flexion)",
      forceProfile: "Ascending strength curve",
    },
  },
  {
    id: "front-squat",
    name: "Front Squat",
    category: "Lower Body - Squats",
    difficulty: "Advanced",
    primaryMuscles: ["Quadriceps", "Core", "Upper Back", "Glutes"],
    physics: {
      leverSystem: "Class 2 Lever",
      forceVector: "Vertical",
      mechanicalAdvantage: "Medium-High",
      energySystem: "Phosphocreatine",
      stickingPoint: "Mid-range (45° knee flexion)",
      forceProfile: "Ascending strength curve",
    },
  },
  {
    id: "overhead-squat",
    name: "Overhead Squat",
    category: "Lower Body - Squats",
    difficulty: "Expert",
    primaryMuscles: ["Quadriceps", "Glutes", "Core", "Shoulders", "Upper Back"],
    physics: {
      leverSystem: "Class 3 Lever",
      forceVector: "Vertical",
      mechanicalAdvantage: "Low",
      energySystem: "Phosphocreatine",
      stickingPoint: "Bottom position",
      forceProfile: "Ascending strength curve",
    },
  },
  {
    id: "goblet-squat",
    name: "Goblet Squat",
    category: "Lower Body - Squats",
    difficulty: "Beginner",
    primaryMuscles: ["Quadriceps", "Glutes", "Core"],
    physics: {
      leverSystem: "Class 2 Lever",
      forceVector: "Vertical",
      mechanicalAdvantage: "High",
      energySystem: "Phosphocreatine",
      stickingPoint: "Bottom position",
      forceProfile: "Ascending strength curve",
    },
  },
  {
    id: "bulgarian-split-squat",
    name: "Bulgarian Split Squat",
    category: "Lower Body - Squats",
    difficulty: "Intermediate",
    primaryMuscles: ["Quadriceps", "Glutes", "Core", "Calves"],
    physics: {
      leverSystem: "Class 2 Lever",
      forceVector: "Vertical",
      mechanicalAdvantage: "Medium",
      energySystem: "Phosphocreatine",
      stickingPoint: "Bottom position",
      forceProfile: "Ascending strength curve",
    },
  },

  // LOWER BODY - DEADLIFTS
  {
    id: "conventional-deadlift",
    name: "Conventional Deadlift",
    category: "Lower Body - Deadlifts",
    difficulty: "Advanced",
    primaryMuscles: ["Hamstrings", "Glutes", "Erector Spinae", "Traps", "Lats"],
    physics: {
      leverSystem: "Class 3 Lever",
      forceVector: "Vertical",
      mechanicalAdvantage: "Low",
      energySystem: "Phosphocreatine",
      stickingPoint: "Mid-shin to knee level",
      forceProfile: "Descending strength curve",
    },
  },
  {
    id: "sumo-deadlift",
    name: "Sumo Deadlift",
    category: "Lower Body - Deadlifts",
    difficulty: "Advanced",
    primaryMuscles: ["Quadriceps", "Glutes", "Adductors", "Erector Spinae"],
    physics: {
      leverSystem: "Class 3 Lever",
      forceVector: "Vertical",
      mechanicalAdvantage: "Medium",
      energySystem: "Phosphocreatine",
      stickingPoint: "Floor to mid-shin",
      forceProfile: "Descending strength curve",
    },
  },
  {
    id: "romanian-deadlift",
    name: "Romanian Deadlift",
    category: "Lower Body - Deadlifts",
    difficulty: "Intermediate",
    primaryMuscles: ["Hamstrings", "Glutes", "Erector Spinae"],
    physics: {
      leverSystem: "Class 3 Lever",
      forceVector: "Vertical",
      mechanicalAdvantage: "Low",
      energySystem: "Phosphocreatine",
      stickingPoint: "Mid-range",
      forceProfile: "Bell curve",
    },
  },
  {
    id: "trap-bar-deadlift",
    name: "Trap Bar Deadlift",
    category: "Lower Body - Deadlifts",
    difficulty: "Intermediate",
    primaryMuscles: ["Quadriceps", "Hamstrings", "Glutes", "Traps"],
    physics: {
      leverSystem: "Class 2 Lever",
      forceVector: "Vertical",
      mechanicalAdvantage: "Medium-High",
      energySystem: "Phosphocreatine",
      stickingPoint: "Mid-shin",
      forceProfile: "Ascending strength curve",
    },
  },
  {
    id: "stiff-leg-deadlift",
    name: "Stiff Leg Deadlift",
    category: "Lower Body - Deadlifts",
    difficulty: "Intermediate",
    primaryMuscles: ["Hamstrings", "Glutes", "Erector Spinae"],
    physics: {
      leverSystem: "Class 3 Lever",
      forceVector: "Vertical",
      mechanicalAdvantage: "Low",
      energySystem: "Phosphocreatine",
      stickingPoint: "Stretched position",
      forceProfile: "Ascending strength curve",
    },
  },

  // LOWER BODY - LUNGES
  {
    id: "walking-lunge",
    name: "Walking Lunge",
    category: "Lower Body - Lunges",
    difficulty: "Beginner",
    primaryMuscles: ["Quadriceps", "Glutes", "Hamstrings", "Calves"],
    physics: {
      leverSystem: "Class 2 Lever",
      forceVector: "Vertical",
      mechanicalAdvantage: "Medium",
      energySystem: "Phosphocreatine",
      stickingPoint: "Bottom position",
      forceProfile: "Ascending strength curve",
    },
  },
  {
    id: "reverse-lunge",
    name: "Reverse Lunge",
    category: "Lower Body - Lunges",
    difficulty: "Beginner",
    primaryMuscles: ["Quadriceps", "Glutes", "Hamstrings"],
    physics: {
      leverSystem: "Class 2 Lever",
      forceVector: "Vertical",
      mechanicalAdvantage: "Medium",
      energySystem: "Phosphocreatine",
      stickingPoint: "Bottom position",
      forceProfile: "Ascending strength curve",
    },
  },
  {
    id: "lateral-lunge",
    name: "Lateral Lunge",
    category: "Lower Body - Lunges",
    difficulty: "Intermediate",
    primaryMuscles: ["Quadriceps", "Glutes", "Adductors", "Abductors"],
    physics: {
      leverSystem: "Class 2 Lever",
      forceVector: "Vertical + Lateral",
      mechanicalAdvantage: "Medium",
      energySystem: "Phosphocreatine",
      stickingPoint: "Bottom position",
      forceProfile: "Ascending strength curve",
    },
  },

  // UPPER BODY PUSH - BENCH PRESS
  {
    id: "barbell-bench-press",
    name: "Barbell Bench Press",
    category: "Upper Body Push - Bench",
    difficulty: "Intermediate",
    primaryMuscles: ["Pectorals", "Triceps", "Anterior Deltoids"],
    physics: {
      leverSystem: "Class 3 Lever",
      forceVector: "Horizontal",
      mechanicalAdvantage: "Medium",
      energySystem: "Phosphocreatine",
      stickingPoint: "2-4 inches off chest",
      forceProfile: "Ascending strength curve",
    },
  },
  {
    id: "incline-bench-press",
    name: "Incline Bench Press",
    category: "Upper Body Push - Bench",
    difficulty: "Intermediate",
    primaryMuscles: ["Upper Pectorals", "Anterior Deltoids", "Triceps"],
    physics: {
      leverSystem: "Class 3 Lever",
      forceVector: "Diagonal (45°)",
      mechanicalAdvantage: "Medium",
      energySystem: "Phosphocreatine",
      stickingPoint: "Mid-range",
      forceProfile: "Ascending strength curve",
    },
  },
  {
    id: "decline-bench-press",
    name: "Decline Bench Press",
    category: "Upper Body Push - Bench",
    difficulty: "Intermediate",
    primaryMuscles: ["Lower Pectorals", "Triceps", "Anterior Deltoids"],
    physics: {
      leverSystem: "Class 3 Lever",
      forceVector: "Diagonal (-15°)",
      mechanicalAdvantage: "Medium-High",
      energySystem: "Phosphocreatine",
      stickingPoint: "Mid-range",
      forceProfile: "Ascending strength curve",
    },
  },
  {
    id: "dumbbell-bench-press",
    name: "Dumbbell Bench Press",
    category: "Upper Body Push - Bench",
    difficulty: "Intermediate",
    primaryMuscles: ["Pectorals", "Triceps", "Anterior Deltoids", "Stabilizers"],
    physics: {
      leverSystem: "Class 3 Lever",
      forceVector: "Horizontal",
      mechanicalAdvantage: "Medium",
      energySystem: "Phosphocreatine",
      stickingPoint: "Stretched position",
      forceProfile: "Descending strength curve",
    },
  },
  {
    id: "close-grip-bench-press",
    name: "Close Grip Bench Press",
    category: "Upper Body Push - Bench",
    difficulty: "Intermediate",
    primaryMuscles: ["Triceps", "Inner Pectorals", "Anterior Deltoids"],
    physics: {
      leverSystem: "Class 3 Lever",
      forceVector: "Horizontal",
      mechanicalAdvantage: "Low-Medium",
      energySystem: "Phosphocreatine",
      stickingPoint: "Mid-range",
      forceProfile: "Ascending strength curve",
    },
  },

  // UPPER BODY PUSH - OVERHEAD PRESS
  {
    id: "overhead-press",
    name: "Standing Overhead Press",
    category: "Upper Body Push - Overhead",
    difficulty: "Advanced",
    primaryMuscles: ["Shoulders", "Triceps", "Upper Chest", "Core"],
    physics: {
      leverSystem: "Class 3 Lever",
      forceVector: "Vertical",
      mechanicalAdvantage: "Low",
      energySystem: "Phosphocreatine",
      stickingPoint: "Forehead level",
      forceProfile: "Ascending strength curve",
    },
  },
  {
    id: "seated-overhead-press",
    name: "Seated Overhead Press",
    category: "Upper Body Push - Overhead",
    difficulty: "Intermediate",
    primaryMuscles: ["Shoulders", "Triceps", "Upper Chest"],
    physics: {
      leverSystem: "Class 3 Lever",
      forceVector: "Vertical",
      mechanicalAdvantage: "Medium",
      energySystem: "Phosphocreatine",
      stickingPoint: "Mid-range",
      forceProfile: "Ascending strength curve",
    },
  },
  {
    id: "dumbbell-shoulder-press",
    name: "Dumbbell Shoulder Press",
    category: "Upper Body Push - Overhead",
    difficulty: "Intermediate",
    primaryMuscles: ["Shoulders", "Triceps", "Stabilizers"],
    physics: {
      leverSystem: "Class 3 Lever",
      forceVector: "Vertical",
      mechanicalAdvantage: "Medium",
      energySystem: "Phosphocreatine",
      stickingPoint: "Bottom position",
      forceProfile: "Descending strength curve",
    },
  },
  {
    id: "arnold-press",
    name: "Arnold Press",
    category: "Upper Body Push - Overhead",
    difficulty: "Advanced",
    primaryMuscles: ["Shoulders", "Triceps", "Stabilizers"],
    physics: {
      leverSystem: "Class 3 Lever",
      forceVector: "Vertical + Rotational",
      mechanicalAdvantage: "Low",
      energySystem: "Phosphocreatine",
      stickingPoint: "Mid-range rotation",
      forceProfile: "Variable",
    },
  },

  // UPPER BODY PUSH - DIPS & PUSHUPS
  {
    id: "parallel-bar-dips",
    name: "Parallel Bar Dips",
    category: "Upper Body Push - Dips",
    difficulty: "Intermediate",
    primaryMuscles: ["Triceps", "Lower Pectorals", "Anterior Deltoids"],
    physics: {
      leverSystem: "Class 3 Lever",
      forceVector: "Vertical",
      mechanicalAdvantage: "Medium",
      energySystem: "Phosphocreatine",
      stickingPoint: "Bottom position",
      forceProfile: "Ascending strength curve",
    },
  },
  {
    id: "ring-dips",
    name: "Ring Dips",
    category: "Upper Body Push - Dips",
    difficulty: "Advanced",
    primaryMuscles: ["Triceps", "Pectorals", "Stabilizers", "Core"],
    physics: {
      leverSystem: "Class 3 Lever",
      forceVector: "Vertical",
      mechanicalAdvantage: "Low",
      energySystem: "Phosphocreatine",
      stickingPoint: "Bottom position",
      forceProfile: "Ascending strength curve",
    },
  },
  {
    id: "push-ups",
    name: "Push-ups",
    category: "Upper Body Push - Dips",
    difficulty: "Beginner",
    primaryMuscles: ["Pectorals", "Triceps", "Anterior Deltoids", "Core"],
    physics: {
      leverSystem: "Class 3 Lever",
      forceVector: "Horizontal",
      mechanicalAdvantage: "Medium-High",
      energySystem: "Phosphocreatine",
      stickingPoint: "Bottom position",
      forceProfile: "Ascending strength curve",
    },
  },
  {
    id: "diamond-push-ups",
    name: "Diamond Push-ups",
    category: "Upper Body Push - Dips",
    difficulty: "Intermediate",
    primaryMuscles: ["Triceps", "Inner Pectorals", "Anterior Deltoids"],
    physics: {
      leverSystem: "Class 3 Lever",
      forceVector: "Horizontal",
      mechanicalAdvantage: "Medium",
      energySystem: "Phosphocreatine",
      stickingPoint: "Bottom position",
      forceProfile: "Ascending strength curve",
    },
  },

  // UPPER BODY PULL - PULL-UPS
  {
    id: "pull-ups",
    name: "Pull-ups",
    category: "Upper Body Pull - Vertical",
    difficulty: "Intermediate",
    primaryMuscles: ["Latissimus Dorsi", "Rhomboids", "Biceps", "Rear Deltoids"],
    physics: {
      leverSystem: "Class 3 Lever",
      forceVector: "Vertical",
      mechanicalAdvantage: "Low",
      energySystem: "Phosphocreatine",
      stickingPoint: "Mid-range",
      forceProfile: "Descending strength curve",
    },
  },
  {
    id: "chin-ups",
    name: "Chin-ups",
    category: "Upper Body Pull - Vertical",
    difficulty: "Intermediate",
    primaryMuscles: ["Biceps", "Latissimus Dorsi", "Rhomboids"],
    physics: {
      leverSystem: "Class 3 Lever",
      forceVector: "Vertical",
      mechanicalAdvantage: "Medium",
      energySystem: "Phosphocreatine",
      stickingPoint: "Mid-range",
      forceProfile: "Descending strength curve",
    },
  },
  {
    id: "wide-grip-pull-ups",
    name: "Wide Grip Pull-ups",
    category: "Upper Body Pull - Vertical",
    difficulty: "Advanced",
    primaryMuscles: ["Latissimus Dorsi", "Teres Major", "Rhomboids"],
    physics: {
      leverSystem: "Class 3 Lever",
      forceVector: "Vertical",
      mechanicalAdvantage: "Low",
      energySystem: "Phosphocreatine",
      stickingPoint: "Mid-range",
      forceProfile: "Descending strength curve",
    },
  },
  {
    id: "lat-pulldown",
    name: "Lat Pulldown",
    category: "Upper Body Pull - Vertical",
    difficulty: "Beginner",
    primaryMuscles: ["Latissimus Dorsi", "Rhomboids", "Biceps"],
    physics: {
      leverSystem: "Class 3 Lever",
      forceVector: "Vertical",
      mechanicalAdvantage: "Medium",
      energySystem: "Phosphocreatine",
      stickingPoint: "Mid-range",
      forceProfile: "Descending strength curve",
    },
  },

  // UPPER BODY PULL - ROWS
  {
    id: "barbell-row",
    name: "Bent Over Barbell Row",
    category: "Upper Body Pull - Horizontal",
    difficulty: "Advanced",
    primaryMuscles: ["Rhomboids", "Middle Traps", "Latissimus Dorsi", "Rear Deltoids"],
    physics: {
      leverSystem: "Class 3 Lever",
      forceVector: "Horizontal",
      mechanicalAdvantage: "Low",
      energySystem: "Phosphocreatine",
      stickingPoint: "Mid-range",
      forceProfile: "Bell curve",
    },
  },
  {
    id: "dumbbell-row",
    name: "Single Arm Dumbbell Row",
    category: "Upper Body Pull - Horizontal",
    difficulty: "Intermediate",
    primaryMuscles: ["Latissimus Dorsi", "Rhomboids", "Biceps", "Core"],
    physics: {
      leverSystem: "Class 3 Lever",
      forceVector: "Horizontal",
      mechanicalAdvantage: "Medium",
      energySystem: "Phosphocreatine",
      stickingPoint: "Stretched position",
      forceProfile: "Descending strength curve",
    },
  },
  {
    id: "t-bar-row",
    name: "T-Bar Row",
    category: "Upper Body Pull - Horizontal",
    difficulty: "Intermediate",
    primaryMuscles: ["Middle Traps", "Rhomboids", "Latissimus Dorsi"],
    physics: {
      leverSystem: "Class 3 Lever",
      forceVector: "Diagonal",
      mechanicalAdvantage: "Medium",
      energySystem: "Phosphocreatine",
      stickingPoint: "Mid-range",
      forceProfile: "Bell curve",
    },
  },
  {
    id: "seated-cable-row",
    name: "Seated Cable Row",
    category: "Upper Body Pull - Horizontal",
    difficulty: "Beginner",
    primaryMuscles: ["Rhomboids", "Middle Traps", "Latissimus Dorsi"],
    physics: {
      leverSystem: "Class 3 Lever",
      forceVector: "Horizontal",
      mechanicalAdvantage: "Medium",
      energySystem: "Phosphocreatine",
      stickingPoint: "Stretched position",
      forceProfile: "Ascending strength curve",
    },
  },
  {
    id: "inverted-rows",
    name: "Inverted Rows",
    category: "Upper Body Pull - Horizontal",
    difficulty: "Beginner",
    primaryMuscles: ["Rhomboids", "Middle Traps", "Biceps", "Core"],
    physics: {
      leverSystem: "Class 3 Lever",
      forceVector: "Horizontal",
      mechanicalAdvantage: "Medium-High",
      energySystem: "Phosphocreatine",
      stickingPoint: "Top position",
      forceProfile: "Descending strength curve",
    },
  },

  // OLYMPIC LIFTS
  {
    id: "clean-and-jerk",
    name: "Clean and Jerk",
    category: "Olympic Lifts",
    difficulty: "Expert",
    primaryMuscles: ["Full Body", "Traps", "Shoulders", "Legs", "Core"],
    physics: {
      leverSystem: "Multiple Levers",
      forceVector: "Vertical + Explosive",
      mechanicalAdvantage: "Variable",
      energySystem: "Phosphocreatine",
      stickingPoint: "Transition phases",
      forceProfile: "Triple extension curve",
    },
  },
  {
    id: "snatch",
    name: "Snatch",
    category: "Olympic Lifts",
    difficulty: "Expert",
    primaryMuscles: ["Full Body", "Shoulders", "Traps", "Legs", "Core"],
    physics: {
      leverSystem: "Multiple Levers",
      forceVector: "Vertical + Explosive",
      mechanicalAdvantage: "Low",
      energySystem: "Phosphocreatine",
      stickingPoint: "Overhead transition",
      forceProfile: "Triple extension curve",
    },
  },
  {
    id: "power-clean",
    name: "Power Clean",
    category: "Olympic Lifts",
    difficulty: "Advanced",
    primaryMuscles: ["Traps", "Shoulders", "Legs", "Core", "Forearms"],
    physics: {
      leverSystem: "Multiple Levers",
      forceVector: "Vertical + Explosive",
      mechanicalAdvantage: "Medium",
      energySystem: "Phosphocreatine",
      stickingPoint: "Second pull",
      forceProfile: "Triple extension curve",
    },
  },
  {
    id: "hang-clean",
    name: "Hang Clean",
    category: "Olympic Lifts",
    difficulty: "Advanced",
    primaryMuscles: ["Traps", "Shoulders", "Hamstrings", "Glutes"],
    physics: {
      leverSystem: "Class 3 Lever",
      forceVector: "Vertical + Explosive",
      mechanicalAdvantage: "Medium",
      energySystem: "Phosphocreatine",
      stickingPoint: "Hip extension",
      forceProfile: "Explosive curve",
    },
  },

  // FUNCTIONAL MOVEMENTS
  {
    id: "turkish-get-up",
    name: "Turkish Get-up",
    category: "Functional",
    difficulty: "Advanced",
    primaryMuscles: ["Full Body", "Core", "Shoulders", "Stabilizers"],
    physics: {
      leverSystem: "Multiple Levers",
      forceVector: "Multi-planar",
      mechanicalAdvantage: "Variable",
      energySystem: "Phosphocreatine + Glycolytic",
      stickingPoint: "Transition phases",
      forceProfile: "Variable",
    },
  },
  {
    id: "farmers-walk",
    name: "Farmer's Walk",
    category: "Functional",
    difficulty: "Intermediate",
    primaryMuscles: ["Traps", "Forearms", "Core", "Legs"],
    physics: {
      leverSystem: "Isometric Hold",
      forceVector: "Vertical + Horizontal",
      mechanicalAdvantage: "Medium",
      energySystem: "Glycolytic",
      stickingPoint: "Grip fatigue",
      forceProfile: "Isometric",
    },
  },
  {
    id: "kettlebell-swing",
    name: "Kettlebell Swing",
    category: "Functional",
    difficulty: "Intermediate",
    primaryMuscles: ["Glutes", "Hamstrings", "Core", "Shoulders"],
    physics: {
      leverSystem: "Class 3 Lever",
      forceVector: "Ballistic Arc",
      mechanicalAdvantage: "Medium",
      energySystem: "Phosphocreatine + Glycolytic",
      stickingPoint: "Hip hinge",
      forceProfile: "Ballistic curve",
    },
  },
  {
    id: "burpees",
    name: "Burpees",
    category: "Functional",
    difficulty: "Intermediate",
    primaryMuscles: ["Full Body", "Cardiovascular System"],
    physics: {
      leverSystem: "Multiple Levers",
      forceVector: "Multi-planar",
      mechanicalAdvantage: "Variable",
      energySystem: "Glycolytic + Oxidative",
      stickingPoint: "Transition phases",
      forceProfile: "Variable",
    },
  },

  // ISOLATION MOVEMENTS
  {
    id: "bicep-curls",
    name: "Bicep Curls",
    category: "Isolation - Arms",
    difficulty: "Beginner",
    primaryMuscles: ["Biceps", "Brachialis"],
    physics: {
      leverSystem: "Class 3 Lever",
      forceVector: "Rotational",
      mechanicalAdvantage: "Low",
      energySystem: "Phosphocreatine",
      stickingPoint: "90° elbow flexion",
      forceProfile: "Bell curve",
    },
  },
  {
    id: "tricep-extensions",
    name: "Tricep Extensions",
    category: "Isolation - Arms",
    difficulty: "Beginner",
    primaryMuscles: ["Triceps"],
    physics: {
      leverSystem: "Class 3 Lever",
      forceVector: "Rotational",
      mechanicalAdvantage: "Low",
      energySystem: "Phosphocreatine",
      stickingPoint: "Stretched position",
      forceProfile: "Ascending strength curve",
    },
  },
  {
    id: "lateral-raises",
    name: "Lateral Raises",
    category: "Isolation - Shoulders",
    difficulty: "Beginner",
    primaryMuscles: ["Lateral Deltoids"],
    physics: {
      leverSystem: "Class 3 Lever",
      forceVector: "Lateral",
      mechanicalAdvantage: "Very Low",
      energySystem: "Phosphocreatine",
      stickingPoint: "90° abduction",
      forceProfile: "Ascending strength curve",
    },
  },
  {
    id: "leg-extensions",
    name: "Leg Extensions",
    category: "Isolation - Legs",
    difficulty: "Beginner",
    primaryMuscles: ["Quadriceps"],
    physics: {
      leverSystem: "Class 3 Lever",
      forceVector: "Rotational",
      mechanicalAdvantage: "Low",
      energySystem: "Phosphocreatine",
      stickingPoint: "Mid-range",
      forceProfile: "Ascending strength curve",
    },
  },
  {
    id: "leg-curls",
    name: "Leg Curls",
    category: "Isolation - Legs",
    difficulty: "Beginner",
    primaryMuscles: ["Hamstrings"],
    physics: {
      leverSystem: "Class 3 Lever",
      forceVector: "Rotational",
      mechanicalAdvantage: "Low",
      energySystem: "Phosphocreatine",
      stickingPoint: "Mid-range",
      forceProfile: "Bell curve",
    },
  },
  {
    id: "calf-raises",
    name: "Calf Raises",
    category: "Isolation - Legs",
    difficulty: "Beginner",
    primaryMuscles: ["Gastrocnemius", "Soleus"],
    physics: {
      leverSystem: "Class 2 Lever",
      forceVector: "Vertical",
      mechanicalAdvantage: "High",
      energySystem: "Phosphocreatine",
      stickingPoint: "Stretched position",
      forceProfile: "Ascending strength curve",
    },
  },
]

export default function Component() {
  const [selectedMovement, setSelectedMovement] = useState(movements[0])
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  // Filter movements based on category and search
  const filteredMovements = movements.filter((movement) => {
    const matchesCategory = selectedCategory === "All" || movement.category === selectedCategory
    const matchesSearch =
      movement.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movement.category.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Dumbbell className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">GymPhysics</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#movements" className="text-gray-600 hover:text-blue-600 transition-colors">
                Movements
              </a>
              <a href="#physics" className="text-gray-600 hover:text-blue-600 transition-colors">
                Physics
              </a>
              <a href="#biomechanics" className="text-gray-600 hover:text-blue-600 transition-colors">
                Biomechanics
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              The Science Behind
              <span className="text-blue-600"> Strength Training</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover the fascinating physics and biomechanics that make gym movements effective. Learn how forces,
              levers, and energy systems work together to build strength.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Brain className="mr-2 h-5 w-5" />
                Explore Physics
              </Button>
              <Button size="lg" variant="outline">
                <Activity className="mr-2 h-5 w-5" />
                View Movements
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Concepts */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Key Physics Concepts</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Force Vectors</h4>
              <p className="text-gray-600">
                Understanding how forces are applied and transmitted through the body during different movements.
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <RotateCcw className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Lever Systems</h4>
              <p className="text-gray-600">
                How your body acts as a complex system of levers to generate and transfer force efficiently.
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Energy Systems</h4>
              <p className="text-gray-600">
                The metabolic pathways that fuel different types of training and muscle contractions.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Movement Analysis */}
      <section id="movements" className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Movement Analysis</h3>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Filter Movements</h4>

                  {/* Search */}
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Search movements..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Category Filter */}
                  <div className="mb-4">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Movement List */}
                <div className="max-h-96 overflow-y-auto space-y-3">
                  <p className="text-sm text-gray-600 mb-2">
                    {filteredMovements.length} movement{filteredMovements.length !== 1 ? "s" : ""} found
                  </p>
                  {filteredMovements.map((movement) => (
                    <Card
                      key={movement.id}
                      className={`p-4 cursor-pointer transition-all hover:shadow-md ${
                        selectedMovement.id === movement.id ? "ring-2 ring-blue-500 bg-blue-50" : ""
                      }`}
                      onClick={() => setSelectedMovement(movement)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="font-semibold text-sm">{movement.name}</h5>
                          <p className="text-xs text-gray-600">{movement.category}</p>
                        </div>
                        <Badge
                          variant={
                            movement.difficulty === "Expert"
                              ? "destructive"
                              : movement.difficulty === "Advanced"
                                ? "destructive"
                                : movement.difficulty === "Intermediate"
                                  ? "default"
                                  : "secondary"
                          }
                          className="text-xs"
                        >
                          {movement.difficulty}
                        </Badge>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Movement Details */}
            <div className="lg:col-span-2">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <h4 className="text-2xl font-bold">{selectedMovement.name}</h4>
                  <Badge>{selectedMovement.category}</Badge>
                </div>

                <Tabs defaultValue="biomechanics" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="biomechanics">Biomechanics</TabsTrigger>
                    <TabsTrigger value="physics">Physics</TabsTrigger>
                    <TabsTrigger value="muscles">Muscles</TabsTrigger>
                  </TabsList>

                  <TabsContent value="biomechanics" className="mt-6">
                    <div className="space-y-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold mb-3">Movement Pattern Analysis</h5>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm font-medium text-gray-700 mb-1">Lever System</p>
                            <p className="text-lg">{selectedMovement.physics.leverSystem}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-700 mb-1">Force Vector</p>
                            <p className="text-lg">{selectedMovement.physics.forceVector}</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-semibold mb-3 flex items-center gap-2">
                          <Gauge className="h-5 w-5" />
                          Mechanical Advantage
                        </h5>
                        <p className="mb-3">
                          <strong>{selectedMovement.physics.mechanicalAdvantage}</strong> mechanical advantage
                        </p>
                        <p className="text-sm text-gray-700">
                          {selectedMovement.physics.mechanicalAdvantage === "Low" &&
                            "Lower mechanical advantage means greater force is required, but allows for greater range of motion and speed."}
                          {selectedMovement.physics.mechanicalAdvantage === "Medium" &&
                            "Moderate mechanical advantage provides a balance between force requirements and movement efficiency."}
                          {selectedMovement.physics.mechanicalAdvantage === "High" &&
                            "Higher mechanical advantage reduces force requirements but may limit range of motion."}
                        </p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="physics" className="mt-6">
                    <div className="space-y-6">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h5 className="font-semibold mb-3 flex items-center gap-2">
                          <Zap className="h-5 w-5" />
                          Energy System & Force Profile
                        </h5>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="mb-2">
                              <strong>Primary Energy System:</strong> {selectedMovement.physics.energySystem}
                            </p>
                            <p className="text-sm text-gray-700">
                              {selectedMovement.physics.energySystem === "Phosphocreatine" &&
                                "Immediate energy for explosive, high-intensity movements lasting 0-10 seconds."}
                              {selectedMovement.physics.energySystem === "Phosphocreatine + Glycolytic" &&
                                "Mixed energy system for moderate duration, high-intensity work."}
                              {selectedMovement.physics.energySystem === "Glycolytic + Oxidative" &&
                                "Combined anaerobic and aerobic energy for sustained efforts."}
                            </p>
                          </div>
                          <div>
                            <p className="mb-2">
                              <strong>Force Profile:</strong> {selectedMovement.physics.forceProfile}
                            </p>
                            <p className="text-sm text-gray-700">
                              {selectedMovement.physics.forceProfile === "Ascending strength curve" &&
                                "Force requirements increase throughout the range of motion."}
                              {selectedMovement.physics.forceProfile === "Descending strength curve" &&
                                "Highest force requirements at the beginning of the movement."}
                              {selectedMovement.physics.forceProfile === "Bell curve" &&
                                "Peak force requirements occur in the middle of the range of motion."}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h5 className="font-semibold mb-3">Biomechanical Analysis</h5>
                        <div className="space-y-3">
                          <div>
                            <p className="mb-1">
                              <strong>Sticking Point:</strong> {selectedMovement.physics.stickingPoint}
                            </p>
                            <p className="text-sm text-gray-700">
                              The portion of the movement where mechanical disadvantage is greatest and failure
                              typically occurs.
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            <ArrowUp className="h-5 w-5 text-green-600" />
                            <span>Concentric Phase: Muscle shortening, force generation</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <ArrowDown className="h-5 w-5 text-blue-600" />
                            <span>Eccentric Phase: Muscle lengthening, controlled resistance</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="muscles" className="mt-6">
                    <div className="space-y-4">
                      <h5 className="font-semibold">Primary Muscles Activated</h5>
                      <div className="grid gap-3">
                        {selectedMovement.primaryMuscles.map((muscle, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                            <span className="font-medium">{muscle}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Physics Principles */}
      <section id="physics" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Core Physics Principles</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-red-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Newton's Laws</h4>
              <p className="text-gray-600 mb-4">
                Every action has an equal and opposite reaction. The force you apply to the weight is matched by the
                weight's resistance.
              </p>
              <div className="text-sm text-gray-500">
                <strong>F = ma</strong> - Force equals mass times acceleration
              </div>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <RotateCcw className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Torque & Rotation</h4>
              <p className="text-gray-600 mb-4">
                Rotational force around joints. Longer moment arms create greater torque, affecting muscle activation
                patterns.
              </p>
              <div className="text-sm text-gray-500">
                <strong>τ = r × F</strong> - Torque equals radius times force
              </div>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Center of Mass</h4>
              <p className="text-gray-600 mb-4">
                The point where the body's mass is concentrated. Proper alignment optimizes force transfer and
                stability.
              </p>
              <div className="text-sm text-gray-500">
                <strong>Balance</strong> - Maintaining COM over base of support
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Dumbbell className="h-6 w-6" />
                <h5 className="text-xl font-bold">GymPhysics</h5>
              </div>
              <p className="text-gray-400">
                Understanding the science behind strength training for better performance and injury prevention.
              </p>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Learn More</h6>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Biomechanics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Exercise Physiology
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Movement Patterns
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Resources</h6>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Research Papers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Video Analysis
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Training Programs
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GymPhysics. Educational content for fitness enthusiasts.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
