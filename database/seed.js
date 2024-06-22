/* eslint-env node */
import { faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'
import { config } from '@dotenvx/dotenvx'
config()

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.SERVICE_ROLE_KEY)
const seedProjects = async (numOfEntries) => {
  const arrayOfInserts = []
  for (let i = 0; i < numOfEntries; i++) {
    const name = faker.lorem.words(3)
    const projectObject = {
      name,
      slug: name.toLocaleLowerCase().replace(/ /g, '-'),
      status: faker.helpers.arrayElement(['in-progress', 'completed']),
      collaborators: faker.helpers.arrayElements([1, 2, 3])
    }
    arrayOfInserts.push(projectObject)
  }
  await supabase.from('projects').insert(arrayOfInserts)
}

await seedProjects(10)
