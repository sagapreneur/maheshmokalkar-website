with open('lib/content/photos.ts', 'r', encoding='utf-8') as f:
    c = f.read()

# Replace interface PhotoStory to include image and date
c = c.replace(
    '''export interface PhotoStory {
  id: string;
  index: number;
  src: string;''',
    '''export interface PhotoStory {
  id: string;
  index: number;
  src: string;
  image: string;
  date?: string;'''
)

# For each item, add image: and date:
c = c.replace('year: ', 'date: ')

lines = []
for line in c.split('\n'):
    lines.append(line)
    if 'src: "/photos/' in line:
        img_line = line.replace('src:', 'image:')
        lines.append(img_line)

with open('lib/content/photos.ts', 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

print('Updated lib/content/photos.ts successfully')
