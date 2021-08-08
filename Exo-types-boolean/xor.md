## L'Opérateur OU Exclusif

L'opérateur Binaire **OU exclusif** binaire (XOR)	a ^ b	Renvoie un 1 lorsqu'un seul des deux opérandes uniquement sera à 1.

### Table de vérité XOR (OU Exclusif)

| a       | b       | a XOR b |
| ------- | ------- | ---------- |
| `false` | `false` | `false`    |
| `false` | `true`  | `true`     |
| `true`  | `false` | `true`     |
| `true`  | `true`  | `false`    |

[comment]: # (tableau en langage Html)

<table>
<thead>
<tr>
<th>a</th>
<th>b</th>
<th>a XOR b</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>0</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td>1</td>
<td>0</td>
<td>1</td>
</tr>
<tr>
<td>1</td>
<td>1</td>
<td>0</td>
</tr>
</tbody>
</table>

Exemple:

```js
let a = 1
let b = 0
let c = a + b = 1

let d = 1
let e = 1
let f = d + e = 0
```
