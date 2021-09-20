import Dashboard from '../components/Dashboard';
import handleMouseMove from '../services/handleMouseMove';

export default function DB() {
  if (typeof window !== 'undefined') {
    document.getElementsByTagName('body')[0].style =
      'background: linear-gradient(var(--yellow-2), var(--yellow-1));';
    window.removeEventListener('mousemove', handleMouseMove);
  }

  return <Dashboard />;
}
