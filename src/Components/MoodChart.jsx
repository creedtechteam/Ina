import React from 'react';
import { useState } from 'react';

const moods = [
  { label: 'Love', color: '#F44336' },
  { label: 'Calm', color: '#3F51B5' },
  { label: 'Happy', color: '#FFEB3B' },
  { label: 'Angry', color: '#FF5722' },
  { label: 'Anxious', color: '#4E342E' },
  { label: 'sick', color: '#4CAF50' },
  { label: 'sad', color: '#B388A8' },
  { label: 'Hurt', color: '#E57373' },
];




function MoodChart({ onSelect }) {
  const [selected, setSelected] = useState(null);
  const total = moods.length;
  const radius = 80;
  const innerRadius = 35;
  const center = 100;
  let startAngle = 0;

  const getCoords = (angle, r) => [
    center + r * Math.cos((angle - 90) * Math.PI / 180),
    center + r * Math.sin((angle - 90) * Math.PI / 180)
  ];

  const handleMoodClick = (mood) => {
    setSelected(mood.label);
    if (onSelect) onSelect(mood.label);
  };

  const arcs = moods.map((mood) => {
    const angle = 360 / total;
    const endAngle = startAngle + angle;
    const [x1, y1] = getCoords(startAngle, radius);
    const [x2, y2] = getCoords(endAngle, radius);
    const [ix1, iy1] = getCoords(endAngle, innerRadius);
    const [ix2, iy2] = getCoords(startAngle, innerRadius);
    const largeArc = angle > 180 ? 1 : 0;
    const path = [
      `M${ix2},${iy2}`,
      `L${x1},${y1}`,
      `A${radius},${radius} 0 ${largeArc} 1 ${x2},${y2}`,
      `L${ix1},${iy1}`,
      `A${innerRadius},${innerRadius} 0 ${largeArc} 0 ${ix2},${iy2}`,
      'Z',
    ].join(' ');
    // For label
    const midAngle = startAngle + angle / 2;
    const [lx, ly] = getCoords(midAngle, (radius + innerRadius) / 2);
    const isSelected = selected === mood.label;
    startAngle += angle;
    return (
      <g key={mood.label} style={{ cursor: 'pointer' }} onClick={() => handleMoodClick(mood)}>
        <path d={path} fill={mood.color} opacity={isSelected ? 1 : 0.7} stroke={isSelected ? '#222' : 'none'} strokeWidth={isSelected ? 3 : 0} />
        <text x={lx} y={ly} textAnchor="middle" dominantBaseline="middle" fontSize="12" fill="#fff" style={{ pointerEvents: 'none', fontWeight: isSelected ? 'bold' : 'normal' }}>{mood.label}</text>
      </g>
    );
  });

  return (
    <div className="flex justify-center items-center w-full">
      <svg
        viewBox="0 0 200 200"
        width="100%"
        height="auto"
        style={{ maxWidth: 220, minWidth: 120 }}
      >
        {arcs}
      </svg>
    </div>
  );
}

export default MoodChart;
