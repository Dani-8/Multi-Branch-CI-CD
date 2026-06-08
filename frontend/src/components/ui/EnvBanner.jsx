export default function EnvBanner({ environment }) {
    const bgClass = environment.includes('production') ? 'bg-emerald-600' :
        environment.includes('staging') ? 'bg-amber-500' : 'bg-blue-600';
    return (
        <div className={`text-center py-1.5 text-xs font-bold uppercase tracking-wider transition-colors duration-300 text-white ${bgClass}`}>
            Running Environment: {environment}
        </div>
    );
}