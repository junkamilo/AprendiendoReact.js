import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils";
import { ChevronDown, Filter, Plus, Search, SlidersHorizontal, SortAsc, X } from "lucide-react"
import { useRef, useState } from "react";
import { useParams, useSearchParams } from 'react-router';

export const SearchControls = () => {

    // const [ query, setQuery ] = useState('');
    const [ searchParams, setsearchParams ] =  useSearchParams();
    const inputRef = useRef<HTMLInputElement>(null);

    const hanledKeydowm = (event: React.KeyboardEvent<HTMLInputElement>) =>{
        if (event.key === 'Enter') {
         const value = inputRef.current?.value ?? '';
         setsearchParams(prev =>{
            prev.set('name',value)
            return prev;
         });
        }
    }

    // Estado para mostrar/ocultar filtros avanzados
    const [showFilters, setShowFilters] = useState(false);
    const [strength, setStrength] = useState(5);

    return (
        <div className="flex flex-col gap-6">

            {/* 1. BARRA SUPERIOR: Búsqueda + Acciones Rápidas */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center">

                {/* INPUT DE BÚSQUEDA (Hero Element) */}
                <div className="relative flex-1 group">
                    <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative flex items-center">
                        <Search className="absolute left-4 text-slate-400 h-6 w-6 group-focus-within:text-blue-500 transition-colors" />
                        <Input
                            ref={inputRef}
                            placeholder="Buscar héroes, villanos, poderes..."
                            className="h-14 pl-12 pr-4 rounded-full border-white/40 bg-white/60 text-lg shadow-sm backdrop-blur-xl transition-all focus-visible:ring-2 focus-visible:ring-blue-500/50 hover:bg-white/80 placeholder:text-slate-400 text-slate-900"
                            onKeyDown={hanledKeydowm}
                            defaultValue={searchParams.get('name') ?? ''}
                        
                        />
                        {/* Shortcut visual (opcional) */}
                        <div className="absolute right-4 hidden sm:flex gap-1">
                            <kbd className="pointer-events-none inline-flex h-6 select-none items-center gap-1 rounded border border-slate-300 bg-white/50 px-2 font-mono text-[10px] font-medium text-slate-500">
                                ⌘ K
                            </kbd>
                        </div>
                    </div>
                </div>

                {/* BOTONES DE ACCIÓN (Diseño Circular/Píldora) */}
                <div className="flex gap-2 shrink-0 justify-end">

                    <Button
                        variant={showFilters ? "secondary" : "outline"}
                        onClick={() => setShowFilters(!showFilters)}
                        className={cn(
                            "h-14 px-6 rounded-full border-white/40 backdrop-blur-md transition-all",
                            showFilters ? "bg-blue-100 text-blue-700 hover:bg-blue-200" : "bg-white/40 hover:bg-white/60"
                        )}
                    >
                        {showFilters ? <X className="h-5 w-5 mr-2" /> : <SlidersHorizontal className="h-5 w-5 mr-2" />}
                        Filtros
                    </Button>

                    <Button variant="outline" size="icon" className="h-14 w-14 rounded-full border-white/40 bg-white/40 hover:bg-white/60 backdrop-blur-md">
                        <SortAsc className="h-5 w-5 text-slate-600" />
                    </Button>

                    <Button size="icon" className="h-14 w-14 rounded-full bg-slate-900 hover:bg-slate-800 text-white shadow-lg shadow-purple-900/20">
                        <Plus className="h-6 w-6" />
                    </Button>
                </div>
            </div>

            {/* 2. PANEL DE FILTROS AVANZADOS (Animación Expandible) */}
            <div className={cn(
                "grid transition-all duration-500 ease-in-out overflow-hidden",
                showFilters ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            )}>
                <div className="min-h-0"> {/* Contenedor interno para la animación grid */}
                    <div className="bg-white/40 border border-white/50 rounded-3xl p-6 backdrop-blur-xl shadow-sm mt-2">

                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                                <Filter className="h-4 w-4" /> Configuración de Búsqueda
                            </h3>
                            <Button variant="ghost" size="sm" className="text-xs text-red-500 hover:text-red-600 hover:bg-red-50 h-8">
                                Limpiar Todo
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                            {/* Selects Estilizados (Simulación visual) */}
                            <CustomSelect label="Universo" placeholder="Marvel, DC..." />
                            <CustomSelect label="Equipo" placeholder="Avengers, JL..." />
                            <CustomSelect label="Categoría" placeholder="Héroe, Villano..." />

                            {/* Slider de Fuerza Personalizado */}
                            <div className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <label className="font-medium text-slate-700">Fuerza Mínima</label>
                                    <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100">{strength}/10</Badge>
                                </div>
                                <div className="relative h-12 flex items-center">
                                    <input
                                        type="range"
                                        min="0"
                                        max="10"
                                        step="1"
                                        value={strength}
                                        onChange={(e) => setStrength(parseInt(e.target.value))}
                                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 hover:accent-blue-500 transition-all"
                                    />
                                </div>
                            </div>

                        </div>

                        {/* Etiquetas Activas (Ejemplo) */}
                        <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-200/60">
                            <span className="text-xs font-medium text-slate-400 mr-2 self-center">Activos:</span>
                            <Badge variant="outline" className="bg-white border-slate-200 pl-2 pr-1 py-1 gap-1">
                                Universo: Marvel <X className="h-3 w-3 cursor-pointer hover:text-red-500" />
                            </Badge>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

// --- COMPONENTE AUXILIAR PARA SELECTS (Visual) ---
const CustomSelect = ({ label, placeholder }: { label: string, placeholder: string }) => (
    <div className="space-y-2 group">
        <label className="text-xs font-bold text-slate-500 uppercase tracking-wide ml-1 group-hover:text-blue-600 transition-colors">
            {label}
        </label>
        <div className="relative">
            <div className="flex items-center justify-between w-full h-11 px-3 py-2 text-sm bg-white/60 border border-white/60 rounded-xl shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 hover:bg-white/80 transition-all cursor-pointer text-slate-600">
                {placeholder}
                <ChevronDown className="h-4 w-4 opacity-50" />
            </div>
        </div>
    </div>
);
