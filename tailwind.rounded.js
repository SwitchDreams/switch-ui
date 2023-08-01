export default function RoundsPlugin({ addComponents }) {
  const roundedComponents = {
    '.rounded-plug-sm': {
      borderRadius: '2px',
    },
    '.rounded-plug-md': {
      borderRadius: '6px',
    },
    '.rounded-plug-lg': {
      borderRadius: '8px',
    },
    '.rounded-plug': {
      borderRadius: '4px',
    },
    '.rounded-plug-full': {
      borderRadius: '9999px',
    },
  };

  addComponents(roundedComponents);
}
