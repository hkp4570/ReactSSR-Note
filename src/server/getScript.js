import fs from 'fs';

export const getScript = () => {
  const result = fs.readdirSync('./public/js')
    .filter(e => e.endsWith('.js'))
    .map(file => `<script src='./js/${file}'</script>`)
    .join('\n');
  return result;
}

