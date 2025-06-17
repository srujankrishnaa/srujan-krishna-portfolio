import { motion } from 'framer-motion'
import BentoIcon from '../Icons/BentoIcon'
import AnimeCard from './BentoCards/AnimeCard'
import AnimeCard2 from './BentoCards/AnimeCard2'
import GithubCard from './BentoCards/Githubcard'
import SocialsCard from './BentoCards/SocialsCard'
import StacksCard from './BentoCards/StacksCard'
import Chopstiks from './Chopstiks'

const Bento = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <div className="mt-16 space-y-10">
      <motion.div
        className="mx-auto flex w-fit items-baseline gap-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative">
          <p className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text font-neu text-3xl font-bold text-transparent">
            Bento
          </p>
          <div className="absolute -bottom-1 left-0 h-0.5 w-full scale-x-0 bg-gradient-to-r from-purple-600 to-blue-600 transition-transform duration-300 group-hover/bentoi:scale-x-100"></div>
        </div>
        <BentoIcon className="w-6 transition-transform duration-300 group-hover/bentoi:rotate-12" />
        <Chopstiks className="w-6 -translate-x-6 -translate-y-1 transition-transform duration-300 group-hover/bentoi:translate-x-0" />
      </motion.div>

      {/* Desktop Layout: Balanced 5-column grid */}
      <div className="mx-auto w-full max-w-6xl px-4">
        <motion.div
          className="hidden auto-rows-fr grid-cols-5 gap-6 xs:grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ gridTemplateRows: 'repeat(2, minmax(0, auto))' }} // Ensures rows adapt to content height
        >
          {/* Row 1 */}
          <motion.div variants={itemVariants} className="col-span-2 row-span-1">
            <AnimeCard />
          </motion.div>
          <motion.div variants={itemVariants} className="col-span-3 row-span-1">
            <StacksCard isForSmall={true} />
          </motion.div>

          {/* Row 2 */}
          <motion.div variants={itemVariants} className="col-span-2 row-span-1">
            {' '}
            {/* GithubCard: Was col-span-3, now col-span-2 */}
            <GithubCard />
          </motion.div>
          <motion.div variants={itemVariants} className="col-span-2 row-span-1">
            {' '}
            {/* SocialsCard: Was col-span-1, now col-span-2 */}
            <SocialsCard />
          </motion.div>
          <motion.div variants={itemVariants} className="col-span-1 row-span-1">
            {' '}
            {/* AnimeCard2: Remains col-span-1 */}
            <AnimeCard2 />
          </motion.div>
        </motion.div>

        {/* Mobile Layout - Retains the previous compact stack for smaller screens */}
        <motion.div
          className="grid grid-cols-2 gap-4 xs:hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="col-span-2">
            <StacksCard />
          </motion.div>
          <motion.div variants={itemVariants}>
            <GithubCard />
          </motion.div>
          <motion.div variants={itemVariants}>
            <SocialsCard />
          </motion.div>
          <motion.div variants={itemVariants}>
            <AnimeCard />
          </motion.div>
          <motion.div variants={itemVariants}>
            <AnimeCard2 />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
export default Bento
